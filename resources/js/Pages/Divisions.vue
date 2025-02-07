<script setup>
import { Head } from "@inertiajs/vue3";
import { router } from "@inertiajs/vue3";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

const props = defineProps({
    divisions: {
        type: Array,
        required: true,
    },
});

const goToDivisionContent = (divisionId) => {
    router.visit(`/divisions/${divisionId}/content`);
};
</script>

<template>
    <Head title="Divisions" />

    <nav
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="500"
        style="backdrop-filter: blur(2px)"
        class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
    >
        <div
            class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img
                    src="../../../public/images/dar-logo.jpg"
                    class="h-8"
                    alt="DAR Logo"
                />
                <span
                    class="self-center text-2xl font-semibold whitespace-nowrap"
                >
                    Department of Agrarian Reform Customer Relation Management
                    System
                </span>
            </a>
        </div>
    </nav>

    <v-container fill-height>
        <v-row class="mx-15" style="margin-top: 100px">
            <v-col>
                <div class="w-full border bg-blue">
                    <v-card-title class="text-center"
                        >Select Division</v-card-title
                    >
                </div>
            </v-col>
        </v-row>

        <v-row class="mx-16 mt-5" align="center" justify="center">
            <v-col
                v-for="division in divisions"
                :key="division.id"
                class="mx-5"
                cols="12"
                sm="6"
                md="4"
                lg="3"
            >
                <div
                    @click="goToDivisionContent(division.id)"
                    class="card max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
                >
                    <v-icon color="green" size="x-large" class="p-3"
                        >mdi-office-building</v-icon
                    >
                    <h5
                        class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
                    >
                        {{ division.name }}
                    </h5>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.card {
    transition: box-shadow 0.3s ease, background-color 0.3s ease,
        color 0.3s ease;
}

.card:hover {
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
}
</style>
