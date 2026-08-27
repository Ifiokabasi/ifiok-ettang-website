import type { Metadata } from "next";
import {
  Poppins,
  Inter,
  Rock_Salt,
  Anton,
  Joan,
  Alfa_Slab_One,
  Karantina,
  Medula_One,
  Italiana,
  Jacques_Francois,
} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rock-salt",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jaro",
  display: "swap",
});

const joan = Joan({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-joan",
  display: "swap",
});

const alfaSlabOne = Alfa_Slab_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jaini",
  display: "swap",
});

const karantina = Karantina({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-karantina",
  display: "swap",
});

const medulaOne = Medula_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-medula",
  display: "swap",
});

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
  display: "swap",
});

const jacquesFrancois = Jacques_Francois({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jacques",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ifiok Ettang — Filmmaker · Journalist · Storyteller",
  description:
    "Ifiok Ettang is a Nigerian filmmaker and journalist telling human stories through documentary, narrative film and visual journalism.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${rockSalt.variable} ${anton.variable} ${joan.variable} ${alfaSlabOne.variable} ${karantina.variable} ${medulaOne.variable} ${italiana.variable} ${jacquesFrancois.variable}`}
    >
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
