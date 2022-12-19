/*
  Warnings:

  - You are about to drop the column `thumbnailUrl` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `thumbnailUrl`;

-- AlterTable
ALTER TABLE `PostCategory` MODIFY `seq` INTEGER NULL AUTO_INCREMENT;

-- CreateTable
CREATE TABLE `Price` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `seq` INTEGER NOT NULL DEFAULT 0,
    `price` INTEGER NULL,
    `pricePerMonth` INTEGER NULL,
    `pricePerYear` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
