-- AlterTable
ALTER TABLE `FAQ` ADD COLUMN `published` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `PostCategory` MODIFY `seq` INTEGER NULL AUTO_INCREMENT;