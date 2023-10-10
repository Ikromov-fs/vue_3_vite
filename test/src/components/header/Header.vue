<template>
  <div class="bg-[#000]">
    <div class="container text-white">
      <div class="w-[100%] flex px-1 py-2 xl:py-10">
        <div class="w-[70%]">
          <h1 class="text-[19px] sm:text-[26px] md:text-[39px] md:font-bold lg:text-[56px]">Suhrobjon Egamberdiyev</h1>
          <h2 class="text-[12px] sm:text-[22px] md:text-[25px] lg:text-[32px]">TypeScript Backend Engineer (Node.js)</h2>
          <ul class="pt-1">
            <li class="grid grid-cols-2 md:mt-2">
              <a v-for="(item, index) in data" :key="index" :href="item?.href" class="flex gap-1 text-white sm:my-[3px] md:my-0">
                <img :src="item?.icon" alt="icon" class="w-[9%] sm:w-[18px]"/>
                <p class="text-[80%] sm:text-[100%] md:text-[20px]">{{ item?.name }}</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="w-[30%] flex items-center justify-end">
          <img
            src="https://avatars.githubusercontent.com/u/101581646?v=4"
            alt="user imag"
            class="rounded-[50%] mmd:max-w-[250px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import phone from "../../assets/svg/phone.svg";
import github from "../../assets/svg/github.svg";
import gmail from "../../assets/svg/gmail.svg";
import tg from "../../assets/svg/tg.svg";
import linkedin from "../../assets/svg/linedin.svg";
const data = [
  {
    name: "(95)-828 98 48",
    icon: phone,
    href: "#",
  },
  {
      name: "LinkedIn",
      icon: linkedin,
      href: "https://www.linkedin.com/in/suhrobjon/",
    },
    {
        name: "Telegram",
        icon: tg,
        href: "https://t.me/Imsukhrobjon",
    },
    {
        name: "GitHub",
        icon: github,
        href: "https://github.com/Sukhrobjon9848",
    },
    {
      name: "suxrobjon1998@gmail.com",
      icon: gmail,
      href: "mailto:suxrobjon1998@gmail.com",
    },
];
</script>
<style scoped></style>
