-- DropForeignKey
ALTER TABLE "claim" DROP CONSTRAINT "claim_drop_id_fkey";

-- DropForeignKey
ALTER TABLE "waitlist" DROP CONSTRAINT "waitlist_drop_id_fkey";

-- AddForeignKey
ALTER TABLE "claim" ADD CONSTRAINT "claim_drop_id_fkey" FOREIGN KEY ("drop_id") REFERENCES "drop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "waitlist" ADD CONSTRAINT "waitlist_drop_id_fkey" FOREIGN KEY ("drop_id") REFERENCES "drop"("id") ON DELETE CASCADE ON UPDATE CASCADE;
