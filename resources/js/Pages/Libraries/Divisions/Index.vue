<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import ModalForm from "@/Pages/Libraries/Divisions/Modal.vue";
import { Head, Link, router } from "@inertiajs/vue3";
import { reactive, ref, watch, onMounted } from "vue";
import Swal from "sweetalert2";

const props = defineProps({
    divisions: Object,
});

const show_modal = ref(false);
const action_clicked = ref(null);

const form = ref({});
const division = ref({});
const search = ref("");

watch(
    () => search.value,
    (search) => {
        router.get("/divisions", { search }, { preserveState: true });
    }
);

const showDivisionModal = async (is_show, action, division_data) => {
    show_modal.value = is_show;
    action_clicked.value = action;
    division.value = division_data;
};

const reloadDivisions = async () => {
    divisions.value = {};
};
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Divisions
            </h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <v-row style="margin-bottom: -30px">
                        <v-col>
                            <div class="w-full m-5 text-right">
                                <v-text-field
                                    :loading="loading"
                                    append-inner-icon="mdi-magnify"
                                    density="compact"
                                    label="Search"
                                    variant="solo"
                                    hide-details
                                    single-line
                                    v-model="search"
                                    @click:append-inner="onClick"
                                ></v-text-field>
                            </div>
                        </v-col>
                        <v-col>
                            <div class="text-right m-5">
                                <v-btn
                                    @click="
                                        showDivisionModal(true, 'Add', null)
                                    "
                                    size="small"
                                    prepend-icon="mdi-plus"
                                    color="green"
                                >
                                    Division
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>

                    <v-card class="m-3">
                        <v-table>
                            <thead>
                                <tr>
                                    <th class="text-left">#</th>
                                    <th class="text-left">Name</th>
                                    <th class="text-left">Short Name</th>
                                    <th class="text-left">Slug</th>
                                    <th class="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(division, index) in divisions.data"
                                    :key="division.id"
                                    class="hover:bg-gray-200"
                                >
                                    <template v-if="division">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ division.name }}</td>
                                        <td>{{ division.short_name }}</td>
                                        <td>{{ division.slug }}</td>
                                        <td class="text-center">
                                            <v-btn
                                                @click="
                                                    showDivisionModal(
                                                        true,
                                                        'Update',
                                                        division
                                                    )
                                                "
                                                size="small"
                                                prepend-icon="mdi-update"
                                                color="primary"
                                            >
                                                Update
                                            </v-btn>
                                        </td>
                                    </template>
                                    <template v-else>
                                        <td span="">No data at the moment</td>
                                    </template>
                                </tr>
                            </tbody>

                            <template v-slot:bottom>
                                <div class="m-2">
                                    <span style="color: gray">
                                        Showing {{ divisions.from }} to
                                        {{ divisions.to }} out of
                                        <b>{{ divisions.total }} records</b>
                                    </span>
                                    <div class="text-center">
                                        <v-pagination
                                            :length="divisions.last_page"
                                            circle
                                            @click="getDivisions"
                                        ></v-pagination>
                                    </div>
                                </div>
                            </template>
                        </v-table>
                    </v-card>
                </div>
            </div>
        </div>

        <ModalForm
            :value="show_modal"
            :division="division"
            :action="action_clicked"
            @input="showDivisionModal"
            @reloadDivisions="reloadDivisions"
        ></ModalForm>
    </AppLayout>
</template>
