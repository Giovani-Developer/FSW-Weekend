import Image from "next/image";
import Header from "@/components/header";
import banner from "@/public/banner.png";
import BookingItem from "@/components/booking-item";

export default function Home() {
  return (
    <div className="max-w-[393px] mx-auto">
      <Header />

      {/* Banner */}
      <div className="px-[14px] mt-2">
        <div className="relative w-full h-[460px] rounded-xl overflow-hidden">
          <Image
            src={banner}
            alt="Agende nos melhores, com a Aparatus"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="px-4 space-y-4 mt-4">
        <h3 className="text-xs font-bold uppercase">Agendamentos</h3>
      <BookingItem />
      </div>
    </div>
  );
}
