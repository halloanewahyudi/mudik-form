<script setup>
import { onMounted, ref, watch } from "vue"
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { format } from 'date-fns';
import idLocale from 'date-fns/locale/id';
import axios from 'axios'
import{useRouter} from 'vue-router'
const router = useRouter()
const currentDate = new Date();
const blok = ref("")
const nomerBlok = ref("")
const nomer = ref("")
const form = ref({
    nama: '',
    alamat: '',
    berangkat:'',
    kembali:'',
    kondisiRumah: '',
    keterangan: ''
})

const formatOptions = { locale: idLocale };

const formatBerangkat = (date) => {
  return format(date, ' dd MMM yyyy', formatOptions);
};

const formatKembali = (date) => {
  return format(date, ' dd MMM yyyy', formatOptions);
};

watch(() => form.value.berangkat, (newVal) => {
  const formattedDate = formatBerangkat(newVal);
  form.value.berangkat = formattedDate;
  console.log('Formatted Berangkat:', formattedDate);
});
watch(() => form.value.kembali, (newVal) => {
  const formattedDate = formatBerangkat(newVal);
  form.value.kembali = formattedDate;
  console.log('Formatted Berangkat:', formattedDate);
});
watch([blok,nomerBlok,nomer],([nb,nnb,nn])=>{
    form.value.alamat = `Blok ${nb}${nnb} No ${nn}`
})



const formSubmit = async () => {
  try {
    const response = await axios.post('https://sheetdb.io/api/v1/g0guoh13c8v4e', form.value);
    console.log('Data berhasil dikirim:', response.data);
    // Lakukan sesuatu setelah sukses mengirim data
    setTimeout(() => {
        router.push('/thanks')
    }, 1000);
  } catch (error) {
    console.error('Error:', error);
    // Lakukan sesuatu jika terjadi kesalahan
  }
};
</script>
<template>

    <form id="sheetdb-form" @submit.prevent="formSubmit" class="max-w-[480px] w-full  rounded-lg p-6 bg-white flex flex-col gap-5 shadow-2xl">
        <p class="text-lg">Guna pendataan warga mudik, silakan isi formulir di bawah ini !</p>
        <hr class="my-2">
        <div class="form-group">
            <label for="nama" class="label"> Nama</label>
            <input type="text" v-model="form.nama" class="input">
        </div>
        <div class="form-group">
            <label for="alamat" class="label"> Alamat</label>
            <div class="grid w-full grid-cols-2 gap-2 rounded-lg bg-brand-3 border-2 border-brand-1 text-neutral-500 font-medium divide-x">
                <div>
                    <input type="radio" v-model="blok" id="1" value="A" class="peer hidden" />
                    <label for="1"
                        class="block cursor-pointer select-none rounded-l-lg p-6 text-center text-2xl peer-checked:bg-brand-1  peer-checked:text-brand-3">Blok
                        A</label>
                </div>
                <div>
                    <input type="radio" v-model="blok" id="2" value="B" class="peer hidden" />
                    <label for="2"
                        class="block cursor-pointer select-none rounded-r-lg p-6 text-center text-2xl peer-checked:bg-brand-1  peer-checked:text-brand-3">Blok
                        B</label>
                </div>
            </div>
            <div v-if="blok" class="mt-4">
                <div class="flex items-center justify-center gap-4 w-full bg-brand-1  rounded-lg p-2">
                    <span class="font-bold p-2 text-brand-3 text-2xl">{{ blok }}</span>
                    <input class="input w-full" type="number" v-model="nomerBlok" id="" placeholder="No Blok" required>
                    <input class="input w-full" type="number" v-model="nomer" id="" placeholder="No Rumah" required>
                </div>
            </div>
        </div>
        <div class="form-group flex flex-col gap-4">
            <label for="berangakat" class="label"> Berangkat
                <VueDatePicker class="input"  v-model="form.berangkat" :enable-time-picker="false" :format="formatBerangkat"></VueDatePicker>
            </label>
            <label for="kembali" class="label"> Kembali
                <VueDatePicker class="input" v-model="form.kembali" :enable-time-picker="false" :format="formatKembali"></VueDatePicker>
            </label>
        </div>
        <div class="form-group ">
            <label class="label" for="kondisiRumah"> Apakah ada yang tinggal di rumah ?</label>
            <div class="grid grid-cols-2 bg-brand-3 rounded-lg ">
                <div>
                    <input type="radio" v-model="form.kondisiRumah" id="kosong" value="Rumah Kosong" class="peer hidden" />
                    <label for="kosong"
                        class="block cursor-pointer select-none rounded-l-lg p-2 text-center peer-checked:bg-brand-1  peer-checked:text-brand-3">Rumah kosong
                        </label>
                </div>
                <div>
                    <input type="radio" v-model="form.kondisiRumah" id="isi" value="Rumah ada yang tinggal" class="peer hidden" />
                    <label for="isi"
                        class="block cursor-pointer select-none rounded-r-lg p-2 text-center peer-checked:bg-brand-1  peer-checked:text-brand-3"> Rumah ada yang tinggal
                        </label>
                </div>
            </div>
        </div>
        <div class="form-group ">
            <label for="" class="label">Keterangan  <small class="italic font-normal">opsional boleh tidak di isi</small></label>
            <textarea v-model="form.keterangan" id="" cols="30" rows="4" class="input"></textarea>
           
        </div>
        <button class="py-3 px-6 text-white bg-brand-1 rounded-lg hover:bg-brand-2 hover:text-brand-1 duration-200"> Submit </button>
    </form>
</template>
<style scoped>
.dp__pointer.dp__input_readonly.dp__input.dp__input_icon_pad.dp__input_reg{
   @apply border-2;
}
</style>