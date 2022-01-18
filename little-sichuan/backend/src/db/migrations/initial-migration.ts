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
        await queryRunner.createTable(
            new Table({
                name: 'orderItem',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'productId',
                        type: 'varchar'
                    },
                    {
                        name: 'quatity',
                        type: 'int'
                    },
                    {
                        name: 'totalPrice',
                        type: 'double'
                    },
                    {
                        name: 'orderId',
                        type: 'varchar'
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
        // await queryRunner.addColumn("orderItem", new TableColumn({
        //     name: 'productId',
        //     type: 'int'
        // }))

        await queryRunner.createForeignKey(
            'orderItem',
            new TableForeignKey({
                columnNames: ['productId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'product',
                onDelete: 'CASCADE'
            })
        );

        // await queryRunner.addColumn("orderItem", new TableColumn({
        //     name: 'orderId',
        //     type: 'int'
        // }))

        await queryRunner.createForeignKey(
            'orderItem',
            new TableForeignKey({
                columnNames: ['orderId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'order',
                onDelete: 'CASCADE'
            })
        );
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        const table1 = await queryRunner.getTable('orderItem');
        const foreignKey1 = table1.foreignKeys.find(
            (fk) => fk.columnNames.indexOf('productId') !== -1
        );
        await queryRunner.dropForeignKey('orderItem', foreignKey1);
        const table2 = await queryRunner.getTable('orderItem');
        const foreignKey2 = table2.foreignKeys.find(
            (fk) => fk.columnNames.indexOf('orderId') !== -1
        );
        await queryRunner.dropForeignKey('orderItem', foreignKey2);
        await queryRunner.dropTable('product');
        await queryRunner.dropTable('orderItem');
        await queryRunner.dropTable('order');
    }
}
