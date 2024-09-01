import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const electronicsCategory = await prisma.category.create({
    data: { name: 'Electronics' },
  });

  const groceriesCategory = await prisma.category.create({
    data: { name: 'Groceries' },
  });

  const smartphoneProduct = await prisma.product.create({
    data: {
      name: 'Smartphone',
      description: 'Latest model smartphone',
      categories: {
        create: [
          { category: { connect: { id: electronicsCategory.id } } },
        ],
      },
    },
  });

  const milkProduct = await prisma.product.create({
    data: {
      name: 'Milk',
      description: 'Fresh milk 1L',
      categories: {
        create: [
          { category: { connect: { id: groceriesCategory.id } } },
        ],
      },
    },
  });

  const store1 = await prisma.store.create({
    data: {
      name: 'Main Street Store',
      location: '123 Main St, City',
    },
  });

  const store2 = await prisma.store.create({
    data: {
      name: 'Second Avenue Store',
      location: '456 Second Ave, City',
    },
  });

  const price1 = await prisma.price.create({
    data: {
      amount: 999.99,
      currency: 'USD',
      product: { connect: { id: smartphoneProduct.id } },
    },
  });

  const price2 = await prisma.price.create({
    data: {
      amount: 1.99,
      currency: 'USD',
      product: { connect: { id: milkProduct.id } },
    },
  });

  const storeStock1 = await prisma.storeStock.create({
    data: {
      quantity: 10,
      product: { connect: { id: smartphoneProduct.id } },
      store: { connect: { id: store1.id } },
    },
  });

  const storeStock2 = await prisma.storeStock.create({
    data: {
      quantity: 50,
      product: { connect: { id: milkProduct.id } },
      store: { connect: { id: store2.id } },
    },
  });

  const warehouseStock1 = await prisma.warehouseStock.create({
    data: {
      quantity: 100,
      product: { connect: { id: smartphoneProduct.id } },
    },
  });

  const warehouseStock2 = await prisma.warehouseStock.create({
    data: {
      quantity: 500,
      product: { connect: { id: milkProduct.id } },
    },
  });

  console.log('Тестовые данные успешно добавлены в базу данных.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
