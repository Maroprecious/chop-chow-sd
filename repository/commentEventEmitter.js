const EventEmitter = require('events');

const { User, Supplier } = require("../db/dbMongo/config/db_buildSchema")
const { Comment } = require("../model/comment")
const { Item } = require("../model/item")



class CommentEventHandler extends EventEmitter {

    static create() {
        const emitter = new CommentEventHandler();
        emitter.initializeCommentListener();
        emitter.initializeCommentUpdateListener()
        emitter.initializeCommentDeleteListener()
        this.emitter = emitter
        return emitter;
    }

    initializeCommentListener() {
        this.on('commentEvent', async (data) => {

            await this.processCommentEvent(data, "calculateNewRatingAverage")
        });
    }

    initializeCommentUpdateListener() {
        this.on('commentUpdatedEvent', async (data) => {
            await this.processCommentEvent(data, "calculateUpdatedRatingAverage")
        });
    }

    initializeCommentDeleteListener() {
        this.on('commentDeletedEvent', async (data) => {
            await this.processCommentEvent(data, "calculateDeletedRatingAverage")
        });
    }


    calculateNewRatingAverage = async (existingRating, totalRatings, newRating) => {

        const totalRatingSum = existingRating * totalRatings + newRating;

        const newTotalRatings = totalRatings + 1;

        let newAverageRating = totalRatingSum / newTotalRatings;

        newAverageRating = newAverageRating.toFixed(2)

        return { newAverageRating, newTotalRatings };
    }


    calculateUpdatedRatingAverage = async (existingRating, totalRatings, newRating) => {
        const totalRatingSum = existingRating * totalRatings + newRating;

        let newAverageRating = totalRatingSum / totalRatings;
        newAverageRating = newAverageRating.toFixed(2);

        return newAverageRating;
    };

    calculateDeletedRatingAverage = async (existingRating, totalRatings, deletedRating) => {
        const totalRatingSum = existingRating * totalRatings - deletedRating;
        const newTotalRatings = totalRatings - 1;

        let newAverageRating = newTotalRatings === 0 ? 0 : totalRatingSum / newTotalRatings;
        newAverageRating = newAverageRating.toFixed(2);

        return { newAverageRating, newTotalRatings };
    }

    async processCommentEvent(data, averageCalculator) {
        try {
            if (data.item_type === "Item") {
                const item = await Item.findById(data.item)
                const getNewRating = await this[averageCalculator](item.average_rating,
                    item.total_rating, data.rating)

                await Item.
                    findOneAndUpdate({ _id: item },
                        {
                            average_rating: getNewRating.newAverageRating,
                            total_rating: getNewRating.newTotalRatings
                        }, { new: true })

            }


            if (data.item_type === "User") {
                const user = await User.findById(data.item)
                const getNewRating = await this[averageCalculator](user.average_rating,
                    user.total_rating, data.rating)

                await User.
                    findOneAndUpdate({ _id: item },
                        {
                            average_rating: getNewRating.newAverageRating,
                            total_rating: getNewRating.newTotalRatings
                        }, { new: true })
            }

            if (data.item_type === "Supplier") {
                const supplier = await Supplier.findById(data.item)
                const getNewRating = await this[averageCalculator](supplier.average_rating,
                    supplier.total_rating, data.rating)

                await Supplier.
                    findOneAndUpdate({ _id: item },
                        {
                            average_rating: getNewRating.newAverageRating,
                            total_rating: getNewRating.newTotalRatings
                        }, { new: true })
            }

        } catch (error) {
            console.error('Error during event handling:', error);
        }

    }

}


module.exports = CommentEventHandler