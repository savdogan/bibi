var initialScreen = [ 
  {
    controlType: "row",
    key: "row1",
    forms: [
      {
        key: "form5",
        layout: "2",
        controlType: "form",
        caption: "Müşteri Bilgileri",
        state: "closed",
        controls: [
          {
            key: "317",
            type: "list",
            listType: "foo",
            allColumns: ["ad", "soyad", "yas", "cinsiyet"],
            list: [
              { key: "23ewwej", ad: "Canım burada da calisiyorum", soyad: "Dogan", yas: "12", cinsiyet: "erkek" },
              { key: "23ewwe22", ad: "Ali", soyad: "Duba", yas: "13", cinsiyet: "kadın" },
              { key: "23ewwef", ad: "canan", soyad: "Yasar", yas: "21", cinsiyet: "erkek" },
              { key: "23ewwe5", ad: "Aysen", soyad: "ali", yas: "33", cinsiyet: "kadın" },
              { key: "23ewwe2", ad: "manyak", soyad: "kardesim", yas: "44", cinsiyet: "erkek" },
              { key: "23ewwe2e", ad: "Hasan", soyad: "demand", yas: "42", cinsiyet: "kadın" },
              { key: "23ewwee", ad: "Deli", soyad: "Karpuz", yas: "82", cinsiyet: "erkek" }
            ]
          },
        ]
      },
      {
        key: "form4",
        layout: "2",
        controlType: "form",
        caption: "Deneme4",
        state: "closed",
        controls: [
          { key: "317", type: "text" },
          { key: "318", type: "button", text: "Hadi bas canim " },
          { key: "319", type: "text", defaultValue: "Canım Benim" }
        ]
      },
      {
        key: "form3",
        layout: "2",
        controlType: "form",
        caption: "Deneme3",
        state: "closed",
        controls: [
          { key: "320", type: "button", text: "popup edicem", onClick: function () { alert('naper'); } },
          { key: "321", type: "img", src: "http://s.hurriyet.com.tr/static/img/hurriyet-logo.png" },
          { key: "322", type: "text" }
        ]
      }
    ]
  },
  {
    controlType: "row",
    key: "row2",
    forms: [
      {
        key: "form11",
        layout: "2",
        controlType: "form",
        caption: "Bu ne la şimdi",
        state: "closed",
        controls: []
      },
      {
        key: "form22",
        layout: "2",
        controlType: "form",
        caption: "Deneme4",
        state: "closed",
        controls: [
          { key: "3171", type: "text" },
          { key: "3181", type: "button", text: "Hadi bas canim" },
          { key: "3191", type: "text", defaultValue: "Canım Benim" }
        ]
      },
      {
        key: "form35",
        layout: "2",
        controlType: "form",
        caption: "Deneme3",
        state: "closed",
        controls: [
          { key: "3201", type: "button", text: "bana bas bana bas" },
          { key: "3211", type: "img", src: "http://s.hurriyet.com.tr/static/img/hurriyet-logo.png" },
          { key: "3221", type: "text" }
        ]
      }
    ]
  }
]


module.exports = initialScreen;