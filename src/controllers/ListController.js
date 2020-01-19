const List = require('../models/List')

// index (Mostra todos), show (Mostra um específico), store, update, destroy

module.exports = {

  async index(request, response) {
    // const devs = await List.find({name: 'Menu'})
    const list = await List.find()

    return response.json(list)
  },

  async store(request, response) {
    const {
      listName,
      listIcon,
      hotEdit = null,
      hotAdd = null,
      link,
      items = null,
      singleLinkList
    } = request.body

    let list = await List.findOne({ listName })

    if (!list) {
      list = await List.create({
        listName,
        listIcon,
        hotEdit,
        hotAdd,
        link,
        items,
        singleLinkList
      })

      return response.json(list);
    }

    return response.json({ alert: "Esse registro já existe!" });
  },

  async update(request, response) {
    const { listName } = request.params
    const {
      listIcon,
      hotEdit,
      hotAdd,
      link,
      items,
      singleLinkList
    } = request.body

    let list = await List.updateOne({ listName }, {
      $set: {
        'listName': listName,
        'listIcon': listIcon,
        'hotEdit': hotEdit,
        'hotAdd': hotAdd,
        'link': link,
        'list': items,
        'singleLinkList': singleLinkList
      }
    })

    return response.json(list)
  },

  async destroy(request, response) {
    const { listName } = request.params

    const list = await List.deleteOne({ listName })

    return response.json(list)
  }
}