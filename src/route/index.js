const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    style: 'index',
    layout: 'background/index',
    chats: [
      {
        name: 'James Anderson',
        message:
          'Mem Ipsum is simply dummy text of the printing and type setting industry.',
        img: 'dist/img/user1.png',
        status: { text: 'Pending', class: 'pending' },
      },
      {
        name: 'Michael Jorden',
        message:
          'Mem Ipsum is simply dummy text of the printing and type setting industry.',
        img: 'dist/img/user2.png',
        status: { text: 'Approved', class: 'approved' },
      },
      {
        name: 'Johnathan Doeting',
        message:
          'Mem Ipsum is simply dummy text of the printing and type setting industry.',
        img: 'dist/img/user3.png',
        status: { text: 'Approved', class: 'approved' },
      },
      {
        name: 'Daniel Kristeen',
        message:
          'Mem Ipsum is simply dummy text of the printing and type setting industry.',
        img: 'dist/img/user.png',
        status: { text: 'Pending', class: 'pending' },
      },
      {
        name: 'Jan Petrovic',
        message:
          'Mem Ipsum is simply dummy text of the printing and type setting industry.',
        img: 'dist/img/user5.png',
        status: { text: 'Rejected', class: 'rejected' },
      },
    ],
    costs: [
      {
        text: 'Wallet Balance',
        price: '$3,567.53',
        class: 'balance',
      },
      {
        text: 'Referral Earnings',
        price: '$769.08',
        class: 'ref-earning',
      },
      {
        text: 'Estimate Sales',
        price: '$5,489',
        class: 'sales',
      },
      {
        text: 'Earnings',
        price: '$23,568',
        class: 'earnings',
      },
    ],
  })
})

router.get('/import', function (req, res) {
  res.render('import', {
    style: 'import',
  })
})

router.get('/use', function (req, res) {
  res.render('use', {
    style: 'use',
  })
})

module.exports = router
