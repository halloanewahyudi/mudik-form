<script setup>
import ListItem from '../components/ListItem.vue';
import Dompet from '../components/icons/Dompet.vue';
import CarsVue from '../components/icons/Cars.vue';

</script>
<template>
    <div class="flex flex-col gap-4">
        <p class="text-xl font-semibold ">Segala puji bagi Allah جل جلاله yang telah mencurahkan rahmat dan hidayah-Nya. Dan
            memberikan kita berbagai macam nikmat terutama nikmat iman, nikmat sehat wal’afiat dan
            nikmat panjang umur.
        </p>
        <p>
            Sebagaimana surat pemberitahuan RT.01 Nomor: 002/RT.001/PPC6/III/2024 tanggal, 10 Maret 2024, telah diinformasikan beberapa hal sebagai berikut:
        </p>
        <div class="flex flex-col gap-4">
            <ListItem title="THR untuk Petugas Kebersihan dan Keamanan" description="Penarikan uang THR untuk Petugas Kebersihan dan Keamanan1 di Lingkungan
RW.028 Pesona Prima Cikahuripan 6, in syaa allah akan dilaksanakan pada Sabtu –
Minggu, 23 – 24 Maret 2024 yang akan diambil secara langsung oleh pengurus
Koordinator Kebersihan dan Keamanan RW. 028 dan didampingi oleh pengurus RT.01">
                <Dompet class="text-brand-1 text-4xl" />
            </ListItem>
            <ListItem title="Tambahan Iuran khusus bulan Maret" 
            description="Khusus untuk bulan Maret 2024 , ada penambahan untuk iuran keamanan RT.01 sebesar Rp.5000,- (lima ribu rupiah), dari Rp.20.000,- (dua puluh ribu rupiah) menjadi Rp.25.000,- (dua puluh lima ribu rupiah) yang akan dialokasikan untuk kompensasi peniadaan hari libur bagi petugas keamanan lingkungan RT.01 dari H-10 idul fitri (minggu ke – 1 bulan April 2024) sampai H+10 idul fitri (minggu ke – 3 bulan April 2024) dalam rangka pengamanan lingkungan RT.01">
                <Dompet class="text-brand-1 text-4xl" />
            </ListItem>
            <ListItem title="Biaya Tambahan khusus Warga yang Mudik" 
            description="Untuk warga yang meninggalkan rumahnya dalam rangka mudik lebaran, wajib
mengisi forms dan membayar biaya tambahan5 sebesar Rp.10.000,- (sepuluh ribu
rupiah) yang akan dialokasikan untuk biaya operasional bagi petugas keamanan
selama jaga mudik lebaran.">
                <CarsVue class="text-brand-1 text-4xl" />
            </ListItem>
        </div>
    </div>
</template>
<!-- https://bit.ly/4a8nlqH -->