import { Bot } from "@skyware/bot";

class EventActionMapper {
    public static mapEventToAction(bot: Bot, event: string, action: string, waitTime: number, messageContent?: string,) {
        switch (event) {
            case 'Follow':
                bot.on('follow', async (reply) => {
                    if (action === 'Send a Message' && messageContent) {
                        setTimeout(async () => {
                            await reply.user.sendMessage({ text: messageContent });
                        }, waitTime * 1000); // délai en secondes
                    } else if (action === 'Follow') {
                        setTimeout(async () => {
                            await reply.user.follow();
                        }, waitTime * 1000);
                    }
                });
                break;

            case 'Reply':
                bot.on('reply', async (reply) => {
                    if (action === 'Send a Message' && messageContent) {
                        setTimeout(async () => {
                            await reply.author.sendMessage({ text: messageContent });
                        }, waitTime * 1000);
                    } else if (action === 'Follow') {
                        setTimeout(async () => {
                            await reply.author.follow();
                        }, waitTime * 1000);
                    }
                });
                break;

            case 'Mention':
                bot.on('mention', async (reply) => {
                    if (action === 'Send a Message' && messageContent) {
                        setTimeout(async () => {
                            await reply.author.sendMessage({ text: messageContent });
                        }, waitTime * 1000);
                    } else if (action === 'Follow') {
                        setTimeout(async () => {
                            await reply.author.follow();
                        }, waitTime * 1000);
                    }
                });
                break;

            default:
                throw new Error('Unsupported event type');
        }
    }
}

export default EventActionMapper;
