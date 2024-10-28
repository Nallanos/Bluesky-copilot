import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Account from "./account.js"
export default class Bot extends BaseModel {
  public static table = 'bots'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare event: string

  @column()
  declare action: string

  @column()
  declare message: string | null

  @column()
  declare waitTime: number

  @column()
  declare accountId: string

  @belongsTo(() => Account)
  declare account: BelongsTo<typeof Account>
}
