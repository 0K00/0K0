<script lang="ts">
    import * as Avatar from '$lib/components/ui/avatar';
    import pictureUrl from '$lib/assets/photo.jpg?url';
    import { user_name } from '../../../routes/data';
</script>


<header class="max-w-3xl m-auto">
    <div class="fixed w-[calc(100%-32px)] z-30 max-w-[768px] bg-background-100 p-4 top-0 border-b">
        <div class="flex flex-row gap-2 items-center text-sm">
            <a href="/">
                <Avatar.Root class="size-6">
                    <Avatar.Image src={pictureUrl} alt="Portrait of 0K0" />
                    <Avatar.Fallback>0K0</Avatar.Fallback>
                </Avatar.Root>
            </a>
            <div class="text-gray-900">
                {user_name}
            </div>
            <div class="text-gray-500">/</div>
            <a class="text-gray-1000 hover:underline decoration-dotted underline-offset-4" href="/">
                Portfolio
            </a>
        </div>
    </div>
</header>