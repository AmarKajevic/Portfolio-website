import type { StaticImageData } from "next/image";

import adminBanners from "@/assets/screenshots/ADMIN-UI/screencapture-localhost-3002-dashboard-customization-2026-09-04-19_50_18.png";
import adminCategories from "@/assets/screenshots/ADMIN-UI/customization.png";
import adminDashboard from "@/assets/screenshots/ADMIN-UI/admin-dashboard.png";
import sellerChat from "@/assets/screenshots/SELLER-UI/seller-chat.png";
import sellerCreateProduct from "@/assets/screenshots/SELLER-UI/create-product.png";
import sellerDiscounts from "@/assets/screenshots/SELLER-UI/screencapture-localhost-3001-dashboard-discount-codes-2026-09-04-15_35_55.png";
import sellerStorefront from "@/assets/screenshots/SELLER-UI/screencapture-localhost-3001-dashboard-shop-2026-09-04-19_52_21.png";
import userChat from "@/assets/screenshots/USER-UI/user-chat.png";
import userCheckout from "@/assets/screenshots/USER-UI/checkout.png";
import userHome from "@/assets/screenshots/USER-UI/user-home.png";
import userProduct from "@/assets/screenshots/USER-UI/user-products.png";

export type GalleryShot = { src: StaticImageData; alt: string; label: string };
export type GalleryGroup = { portal: string; description: string; shots: GalleryShot[] };

export const vendoraCover = userHome;

export const vendoraGallery: GalleryGroup[] = [
  {
    portal: "Buyer portal",
    description: "Browsing, checkout, and buyer ↔ seller messaging.",
    shots: [
      { src: userHome, alt: "Vendora buyer storefront home page", label: "Storefront home" },
      { src: userProduct, alt: "Vendora product detail page for an iPad Air listing", label: "Product page" },
      { src: userCheckout, alt: "Vendora secure checkout with card entry", label: "Checkout" },
      { src: userChat, alt: "A buyer chatting with a seller in real time on Vendora", label: "Buyer ↔ seller chat" },
    ],
  },
  {
    portal: "Seller portal",
    description: "Store management, product creation, and promotions.",
    shots: [
      { src: sellerStorefront, alt: "Vendora seller storefront and product management view", label: "Seller storefront" },
      { src: sellerCreateProduct, alt: "Vendora create product form for sellers", label: "Create product" },
      { src: sellerDiscounts, alt: "Vendora seller discount code management", label: "Discount codes" },
      { src: sellerChat, alt: "A seller replying to a buyer in the same conversation thread", label: "Seller inbox" },
    ],
  },
  {
    portal: "Admin portal",
    description: "Platform-wide analytics and configuration.",
    shots: [
      { src: adminDashboard, alt: "Vendora admin analytics dashboard with revenue and orders", label: "Analytics dashboard" },
      { src: adminCategories, alt: "Vendora admin category and subcategory customization", label: "Categories" },
      { src: adminBanners, alt: "Vendora admin homepage banner management", label: "Banner management" },
    ],
  },
];
