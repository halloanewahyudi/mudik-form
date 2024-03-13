<script setup>
const props = defineProps(['title','description'])
</script>
<template>
    <div class="flex flex-col lg:flex-row  gap-3 p-4 rounded-lg bg-brand-3 border border-brand-1">
        <div class="w-12 shrink-0">
           <slot />
        </div>
        <div> 
            <h4 class="font-semibold text-lg mb-2 text-brand-1"> {{ props.title }}</h4>
            <p> {{ props.description }}</p>
        </div>
    </div>
</template>