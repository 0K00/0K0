<script lang="ts">
    import pictureUrl from '$lib/assets/photo.jpg?url';
    import Badge from '$lib/components/ui/badge/badge.svelte';
    import Button from '$lib/components/ui/button/button.svelte';
    import Description from '$lib/components/ui/description/description.svelte';
    import * as Tabs from '$lib/components/ui/tabs';
    import { title, about_me, contacts, techs, skills, projects, works } from './data'
</script>

<main class="max-w-3xl m-auto mt-48 mb-16">
    <h1 class="mb-8 text-2xl font-semibold tracking-tighter text-gray-1000 sm:text-3xl md:text-4xl">{title}</h1>
    <section class="flex md:flex-row flex-col gap-8">
        <div class="md:max-w-48 max-h-48 bg-[#382822] rounded-lg overflow-hidden">
            <img src={pictureUrl} class="md:translate-y-0 -translate-y-1/3" alt="Portrait of 0K0" />
        </div>
        <div class="flex flex-col gap-2 justify-between">
            <h2 class="text-base tracking-tighter text-gray-1000 sm:text-lg md:text-xl">About me</h2>
            <p class="text-gray-900">{about_me}</p>
            <div class="flex flex-row gap-2">
                {#each contacts as { label, href, icon: Icon }}                    
                <a href={href} target="_blank">
                    <Button size='sm' variant='secondary'>
                        <Icon />
                        {label}
                    </Button>
                </a>
                {/each}
            </div>
        </div>
    </section>

    <section class="mt-12">
        <h2 class="text-base tracking-tighter text-gray-1000 sm:text-lg md:text-xl">Tech Stack</h2>
        <Tabs.Root value="frontend">
            <Tabs.List>
                {#each techs as { title, value, icon }}
                    <Tabs.Trigger {icon} {value}>{title}</Tabs.Trigger>
                {/each}
            </Tabs.List>
        
            {#each techs as { content, value }}
                <Tabs.Content {value}>
                    <div class="flex flex-row gap-2 w-full flex-wrap mt-8">
                        {#each content as { title, icon: Icon, color }}
                        <Badge size="lg" variant={color}>
                            <Icon aria-hidden="true" class="size-4" />
                            {title}
                        </Badge>
                        {/each}
                    </div>
                </Tabs.Content>
            {/each}
        </Tabs.Root>
    </section>

    <section class="mt-12">
        <h2 class="text-base tracking-tighter text-gray-1000 sm:text-lg md:text-xl">Skills</h2>
        <Tabs.Root value="education">
            <Tabs.List>
                {#each skills as { title, value, icon }}
                    <Tabs.Trigger {icon} {value}>{title}</Tabs.Trigger>
                {/each}
            </Tabs.List>
        
            {#each skills as { content, value }}
                <Tabs.Content {value}>
                    <div class="flex flex-col gap-6 mt-8">
                        {#each content as { title, description, tooltip }}
                            <Description title={title} content={description} tooltip={tooltip} />
                        {/each}
                    </div>
                </Tabs.Content>
            {/each}
        </Tabs.Root>
    </section>

    <section class="mt-12">
        <h2 class="text-base tracking-tighter text-gray-1000 sm:text-lg md:text-xl border-b pb-4">Projects</h2>
        <div class="flex flex-row gap-2 w-full justify-between flex-wrap md:flex-nowrap mt-8">
            {#each projects as { title, description, href, techs, preview}}
                <a href={href} target="_blank" class="group w-full bg-background-100 flex flex-col cursor-pointer rounded-xl overflow-hidden border border-gray-alpha-400">
                    <div class="overflow-hidden">
                        <img class="group-hover:scale-110 transition-transform duration-300 ease-in-out" src={preview} alt="Portrait of 0K0" />
                    </div>
                    <div class="p-4 flex flex-col gap-2 justify-between pointer-events-none">
                        <h3 class="text-md text-gray-1000">{title}</h3>
                        <p class="text-xs text-gray-900">{description}</p>
                        <div class="mt-6 flex flex-row gap-2 flex-wrap">
                            {#each techs as { title, icon: Icon, color }}
                            <Badge size="md" variant={color}>
                                <Icon aria-hidden="true" class="size-4" />
                                {title}
                            </Badge>
                            {/each}
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </section>

    <section class="mt-12">
        <h2 class="text-base tracking-tighter text-gray-1000 sm:text-lg md:text-xl border-b pb-4">Work Experience</h2>
        <div class="flex flex-col gap-6 w-full justify-between mt-8">
            {#each works as { title, description, tooltip }}
                <Description title={title} content={description} tooltip={tooltip} />
            {/each}
        </div>
    </section>
</main>