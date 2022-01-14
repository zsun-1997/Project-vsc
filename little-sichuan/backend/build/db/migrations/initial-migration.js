"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration1641677200652 = void 0;
const typeorm_1 = require("typeorm");
class InitialMigration1641677200652 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'product',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: 'name',
                    type: 'varchar'
                }
            ]
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('product');
    }
}
exports.InitialMigration1641677200652 = InitialMigration1641677200652;
//# sourceMappingURL=initial-migration.js.map