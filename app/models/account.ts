import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Bot from './bot.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Account extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare did: string

  @column()
  declare user_id: number

  @column()
  declare app_password: string

  @column()
  declare bksy_social: string

  @hasMany(() => Bot)
  declare bots: HasMany<typeof Bot>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}