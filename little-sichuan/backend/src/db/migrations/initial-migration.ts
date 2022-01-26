import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableColumn,
    TableForeignKey
} from 'typeorm';

export class InitialMigration1641677200652 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
                    },
                    {
                        name: 'description',
                        type: 'text'
                    },
                    {
                        name: 'type',
                        type: 'varchar'
                    },
                    {
                        name: 'image',
                        type: 'varchar'
                    },
                    {
                        name: 'price',
                        type: 'decimal'
                    }
                ]
            }),
            true
        );
        await queryRunner.createTable(
            new Table({
                name: 'orderitem',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'quantity',
                        type: 'int'
                    },
                    {
                        name: 'itemtotalPrice',
                        type: 'decimal'
                    }
                ]
            }),
            true
        );
        await queryRunner.createTable(
            new Table({
                name: 'order',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'odderedTime',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'totalPrice',
                        type: 'decimal'
                    },
                    {
                        name: 'taxAmount',
                        type: 'decimal'
                    },
                    {
                        name: 'phoneNumber',
                        type: 'varchar'
                    },
                    {
                        name: 'status',
                        type: 'text'
                    }
                ]
            }),
            true
        );
        await queryRunner.addColumn(
            'orderitem',
            new TableColumn({
                name: 'productId',
                type: 'varchar',
                isNullable: false
            })
        );

        await queryRunner.createForeignKey(
            'orderitem',
            new TableForeignKey({
                columnNames: ['productId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'product',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        );

        await queryRunner.addColumn(
            'orderitem',
            new TableColumn({
                name: 'orderId',
                type: 'varchar',
                isNullable: false
            })
        );
        await queryRunner.createForeignKey(
            'orderitem',
            new TableForeignKey({
                columnNames: ['orderId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'order',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        );
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        const table1 = await queryRunner.getTable('orderitem');
        const foreignKey1 = table1.foreignKeys.find(
            (fk) => fk.columnNames.indexOf('productId') !== -1
        );
        await queryRunner.dropForeignKey('orderitem', foreignKey1);
        const table2 = await queryRunner.getTable('orderitem');
        const foreignKey2 = table2.foreignKeys.find(
            (fk) => fk.columnNames.indexOf('orderId') !== -1
        );
        await queryRunner.dropForeignKey('orderitem', foreignKey2);
        await queryRunner.dropTable('product');
        await queryRunner.dropTable('orderitem');
        await queryRunner.dropTable('order');
    }
}
