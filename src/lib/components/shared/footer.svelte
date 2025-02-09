<script lang="ts">
    import { ModeWatcher, setMode, userPrefersMode, systemPrefersMode } from 'mode-watcher';
    import { Icons } from '$lib/assets/icons';
    import Button from '../ui/button/button.svelte';
  import { onMount } from 'svelte';

    let theme: 'system' | 'light' | 'dark' = $state($userPrefersMode);

	function handle_theme_change(event: Event) {
		theme = (event.target as HTMLInputElement).value as 'system' | 'light' | 'dark';
		setMode(theme);
	}

    let open: boolean = $state(false);
    let menuRef: HTMLDivElement | null = null;

    let options = $state([
        { value: 'system', icon: Icons.ThemeSwitchSystem },
        { value: 'light', icon: Icons.ThemeSwitchLight },
        { value: 'dark', icon: Icons.ThemeSwitchDark }
    ]);

    function handleClickOutside(event: MouseEvent) {
        if (menuRef && !menuRef.contains(event.target as Node))
        open = false;
    }

    onMount(() => {
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    });
</script>

<ModeWatcher />

<footer class="max-w-3xl m-auto mb-8 w-full flex justify-end border-t py-4">
    <div class="relative" bind:this={menuRef}>
        <Button variant="tertiary" onclick={() => { open = !open }}>
            {#if theme === 'light' || $systemPrefersMode === 'light' && theme !== 'dark'}
                <Icons.ThemeSwitchLight aria-hidden="true" height="16" width="16" />
            {/if}
            {#if theme === 'dark' || $systemPrefersMode === 'dark' && theme !== 'light'}
                <Icons.ThemeSwitchDark aria-hidden="true" height="16" width="16" />
            {/if}
            <span class="capitalize">
                {theme}
            </span>
        </Button>
        {#if open}
            <div class="absolute bottom-full mb-2 right-0 flex flex-col gap-1 bg-background-100 rounded-lg p-2 border min-w-32">
                {#each options as { value, icon: Icon }}
                    <span class="relative capitalize">
                        <input
                            id="theme-switch-{value}"
                            type="radio"
                            {value}
                            bind:group={$userPrefersMode}
                            onchange={handle_theme_change}
                            class="group peer absolute size-full appearance-none rounded-full outline-none focus-visible:shadow-focus-ring"
                        />
                        <label
                            aria-label="system theme"
                            for="theme-switch-{value}"
                            title="{value} theme"
                            class="relative flex cursor-pointer gap-4 py-1 px-2 items-center justify-between bg-transparent text-gray-700 hover:text-gray-1000 rounded-md hover:bg-gray-200 peer-checked:bg-gray-200 peer-checked:text-gray-1000"
                        >
                            <span class="text-sm">{value}</span>
                            {#if theme === value}
                                <span class="text-gray-1000"><Icons.Check aria-hidden="true" height="16" width="16" /></span>
                            {/if}
                        </label>
                    </span>
                {/each}
            </div>
        {/if}
    </div>
</footer>