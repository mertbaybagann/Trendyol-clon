import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { RiMessage2Fill, RiCoupon3Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import { GiWallet, GiCutDiamond } from "react-icons/gi";

export const ACCOUNT = [
  {
    name: "Siparişlerim",
    path: "/siparislerim",
    icon: <BsBoxSeam />,
  },
  {
    name: "Değerlendirmelerim",
    path: "/degerlendirmelerim",
    icon: <RiMessage2Fill />,
  },
  {
    name: "Mesajlarım",
    path: "/mesajlarim",
    icon: <MdEmail />,
  },
  {
    name: "Trendyol Cüzdanım",
    path: "/cuzdanim",
    icon: <GiWallet />,
  },
  {
    name: "İndirim Kuponlarım",
    path: "/IndirimKuponlari",
    icon: <RiCoupon3Fill />,
  },

  {
    name: "Kullanıcı Bilgilerim",
    path: "/KullaniciBilgileri",
    icon: <FaUserAlt />,
  },

  {
    name: "Trendyol Elite",
    path: "/Elite",
    icon: <GiCutDiamond />,
  },
  {
    name: "Çıkış Yap",
    path: "/authentication/logout",
    icon: <IoLogOutSharp />,
  },
];
