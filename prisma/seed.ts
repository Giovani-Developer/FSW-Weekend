import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedDatabase() {
  const images = [
    "https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png",
    "https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png",
    "https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png",
    "https://utfs.io/f/7e309eaa-d722-465b-b8b6-76217404a3d3-16s.png",
    "https://utfs.io/f/178da6b6-6f9a-424a-be9d-a2feb476eb36-16t.png",
  ];

  const creativeNames = [
    "Barbearia Vintage",
    "Corte & Estilo",
    "Barba & Navalha",
    "The Dapper Den",
    "Cabelo & Cia.",
  ];

  const addresses = [
    "Rua da Barbearia, 123",
    "Avenida dos Cortes, 456",
    "Praça da Barba, 789",
    "Travessa da Navalha, 101",
    "Alameda dos Estilos, 202",
  ];

  const services = [
    {
      name: "Corte de Cabelo",
      description: "Estilo personalizado com as últimas tendências.",
      priceInCents: 6000,
      imageUrl: "https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png",
    },
    {
      name: "Barba",
      description: "Modelagem completa para destacar sua masculinidade.",
      priceInCents: 4000,
      imageUrl: "https://utfs.io/f/e6bdffb6-24a9-455b-aba3-903c2c2b5bde-1jo6tu.png",
    },
  ];

  for (let i = 0; i < 5; i++) {
    const barbershop = await prisma.barbershop.create({
      data: {
        name: creativeNames[i],
        address: addresses[i],
        imageUrl: images[i],
        phones: ["(11) 99999-9999"],
        description: "Barbearia exemplo gerada via seed.",
      },
    });

    for (const service of services) {
      await prisma.barbershopService.create({
        data: {
          name: service.name,
          description: service.description,
          priceInCents: service.priceInCents,
          imageUrl: service.imageUrl,
          barbershopId: barbershop.id,
        },
      });
    }
  }
}

seedDatabase()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
