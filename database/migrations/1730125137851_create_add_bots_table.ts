import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bots'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string("event").notNullable()
      table.string("action").notNullable()
      table.string("message").nullable()
      table.integer("wait_time").notNullable()
      table.increments("id")
      table.string('account_id').unsigned().references('accounts.id').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}