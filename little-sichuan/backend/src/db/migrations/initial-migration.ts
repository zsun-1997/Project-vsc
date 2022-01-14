import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class InitialMigration1641677200652 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'product',
                columns: [
                    {
                        name: 'id',
                        type: 'number',
                        isPrimary: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'description',
                        type: 'text'
                    },
                    {
                        name: 'image',
                        type: 'blob'
                    },
                    {
                        name: 'price',
                        type: 'decimal'
                    }
                ]
            }),
            true
        );
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('product');
    }
}
