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
                name: 'Product',
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
                        type: 'decimal(8,2)'
                    },
                    {
                        name: 'isfeatured',
                        type: 'boolean'
                    }
                ]
            }),
            true
        );
        await queryRunner.createTable(
            new Table({
                name: 'OrderItem',
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
                        type: 'decimal(8,2)'
                    }
                ]
            }),
            true
        );
        await queryRunner.createTable(
            new Table({
                name: 'Order',
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
                        type: 'decimal(8,2)'
                    },
                    {
                        name: 'taxAmount',
                        type: 'decimal(8,2)'
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
            'OrderItem',
            new TableColumn({
                name: 'productId',
                type: 'varchar',
                isNullable: false
            })
        );

        await queryRunner.createForeignKey(
            'OrderItem',
            new TableForeignKey({
                columnNames: ['productId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'Product',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        );

        await queryRunner.addColumn(
            'OrderItem',
            new TableColumn({
                name: 'orderId',
                type: 'varchar',
                isNullable: false
            })
        );
        await queryRunner.createForeignKey(
            'OrderItem',
            new TableForeignKey({
                columnNames: ['orderId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'Order',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        );
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        const table1 = await queryRunner.getTable('OrderItem');
        const foreignKey1 = table1.foreignKeys.find(
            (fk) => fk.columnNames.indexOf('productId') !== -1
        );
        await queryRunner.dropForeignKey('OrderItem', foreignKey1);
        const table2 = await queryRunner.getTable('OrderItem');
        const foreignKey2 = table2.foreignKeys.find(
            (fk) => fk.columnNames.indexOf('orderId') !== -1
        );
        await queryRunner.dropForeignKey('OrderItem', foreignKey2);
        await queryRunner.dropTable('Product');
        await queryRunner.dropTable('OrderItem');
        await queryRunner.dropTable('Order');
    }
}
