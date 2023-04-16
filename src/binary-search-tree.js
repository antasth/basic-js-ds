const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }
  root() {
    console.log('this.rootNode',this.rootNode)
    return this.rootNode
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data)

    function addNode(node, data) {
      if (!node) {
        return new Node(data)
      }
      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        node.left = addNode(node.left, data)
      } else {
        node.rigth = addNode(node.rigth, data)
      }
      console.log(node)
      return node
    }
  }

  has(data) {
    return searchNode(this.rootNode, data)

    function searchNode(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      return data < node.data
        ? searchNode(node.left, data)
        : searchNode(node.rigth, data)
    }
  }

  find(data) {
    return search(this.rootNode, data)

    function search(node, data) {
      if (!node) {
        return null
      }
      if (node.data === data) {
        return node
      }
      return data < node.data
        ? search(node.left, data)
        : search(node.rigth, data)
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data)

    function removeNode(node, data) {
      if (!node) {
        return null
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (node.data < data) {
        node.rigth = removeNode(node.rigth, data)
        return node
      } else {
        if (!node.left && !node.rigth) {
          return null
        }

        if (!node.left) {
          node = node.rigth
          return node
        }

        if (!node.rigth) {
          node = node.left
          return node
        }

        let minRight = node.rigth
        while (minRight.left) {
          minRight = minRight.left
        }
        node.data = minRight.value

        node.rigth = removeNode(node.rigth, minRight.value)

        return node
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return
    }
    let node = this.rootNode
    while (node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.rootNode) {
      return
    }
    let node = this.rootNode
    while (node.rigth) {
      node = node.rigth
    }
    return node.data
  }
}

const tree = new BinarySearchTree()

      tree.add(9);
      tree.add(14);
      tree.add(2);
      tree.add(6);
      tree.add(128);
      tree.add(8);
      tree.add(31);
      tree.add(54);
      tree.add(1);
      tree.remove(14);
      tree.remove(8);
      tree.remove(9); 
console.log(tree.root().data)
console.log(tree.min())
console.log(tree.max())
console.log(tree.remove(5))
console.log(tree.has(5))
console.log(tree.max())

module.exports = {
  BinarySearchTree,
}
