export const questions = [

  //absent
  {
    text:'absent',
    afterBe: true,
    complements:[
      {
        text : 'somewhere',
        comment: 'где-то',
        prepositions:[
          { text: '-' },
          { text: 'at' },
          { text: 'on' },
          { text: 'in' },
          { text: 'from', isCorrect: true }
        ]
      }
    ]
  },

  //accuse
  {
    text:'accuse',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'кого-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'to' },
          { text: 'on' }
        ]
      }, {
        text: 'smth',
        comment: 'в чём-то',
        prepositions:[
          { text: '-' },
          { text: 'for' },
          { text: 'on' },
          { text: 'in', isCorrect: true },
          { text: 'about' }
        ]
      }
    ]
  },

  //accustomed
  {
    text:'accustomed',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'чему-то',
        prepositions:[
          { text: '-' },
          { text: 'to', isCorrect: true },
          { text: 'for' },
          { text: 'on' },
          { text: 'in' }
        ]
      }
    ]
  },

  //add
  {
    text:'add',
    afterBe: false,
    complements:[
      {
        text : 'smth',
        comment: 'что-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'at' },
          { text: 'on' },
          { text: 'with' },
          { text: 'for' }
        ]
      }, {
        text: 'smth',
        comment: 'к чему-то',
        prepositions:[
          { text: 'to', isCorrect: true },
          { text: 'at' },
          { text: 'on' },
          { text: 'with' },
          { text: 'for' }
        ]
      }
    ]
  },

  //aquainted
  {
    text:'aquainted',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'с кем-то/чем-то',
        prepositions:[
          { text: '-' },
          { text: 'to' },
          { text: 'for' },
          { text: 'on' },
          { text: 'with', isCorrect: true }
        ]
      }
    ]
  },

  //admire
  {
    text:'admire',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кем-то/чем-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'about' },
          { text: 'for' },
          { text: 'on' },
          { text: 'with' }
        ]
      },
      {
        text : 'smth',
        comment: 'за что-то',
        prepositions:[
          { text: 'about' },
          { text: 'by' },
          { text: 'for', isCorrect: true },
          { text: 'on' },
          { text: 'with' }
        ]
      }
    ]
  },

  //afraid
  {
    text:'afraid',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кого-то/чего-то',
        prepositions:[
          { text: 'of', isCorrect: true },
          { text: 'about' },
          { text: 'for' },
          { text: 'on' },
          { text: 'with' }
        ]
      },
      {
        text : 'smb/smth',
        comment: 'за кого-то/что-то (ему может угражать опасность)',
        prepositions:[
          { text: 'about' },
          { text: 'by' },
          { text: 'for', isCorrect: true },
          { text: 'on' },
          { text: 'with' }
        ]
      }
    ]
  },

  //agree
  {
    text:'agree',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        comment: 'с кем-то/чем-то, декларирующим суть соглашения (a person, an opinion or a policy)',
        prepositions:[
          { text: 'of' },
          { text: 'about' },
          { text: 'for' },
          { text: 'on' },
          { text: 'with', isCorrect: true }
        ]
      },
      {
        text : 'smth',
        comment: 'c чем-то (по поводу чего-то, сутью дискуссиии)',
        prepositions:[
          { text: 'about', isCorrect: true },
          { text: 'by' },
          { text: 'for' },
          { text: 'on' },
          { text: 'with' }
        ]
      },
      {
        text : 'a matter for decision',
        comment: 'a plan, a date, etc, you decide jointly with others to do something',
        prepositions:[
          { text: 'about' },
          { text: 'by' },
          { text: 'for' },
          { text: 'on', isCorrect: true },
          { text: 'with' }
        ]
      }
    ]
  },

  //angry
  {
    text:'angry',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'на кого-то/что-то',
        prepositions:[
          { text: 'of' },
          { text: 'about' },
          { text: 'at', isCorrect: true },
          { text: 'on' },
          { text: 'with', isCorrect: true }
        ]
      },
      {
        text : 'smth',
        comment: 'по поводу чего-то',
        prepositions:[
          { text: 'about', isCorrect: true },
          { text: 'of' },
          { text: 'for' },
          { text: 'on' },
          { text: 'with' }
        ]
      }
    ]
  },

  //appologize
  {
    text:'appologize',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'перед кем-то',
        prepositions:[
          { text: 'of' },
          { text: '-' },
          { text: 'at' },
          { text: 'for' },
          { text: 'to', isCorrect: true }
        ]
      },
      {
        text : 'smth',
        comment: 'за что-то',
        prepositions:[
          { text: 'about' },
          { text: 'of' },
          { text: 'for', isCorrect: true },
          { text: 'on' },
          { text: 'at' }
        ]
      }
    ]
  },

  //apply
  {
    text: 'apply',
    afterBe: false,
    complements:[
      {
        text : 'a place',
        comment: 'на место',
        prepositions:[
          { text: 'of' },
          { text: '-' },
          { text: 'at' },
          { text: 'for' },
          { text: 'to', isCorrect: true }
        ]
      },
      {
        text : 'smth',
        comment: 'для чего-то',
        prepositions:[
          { text: 'about' },
          { text: 'of' },
          { text: 'for', isCorrect: true },
          { text: 'on' },
          { text: 'at' }
        ]
      }
    ]
  },

  //approve
  {
    text: 'approve',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кого-то/что-то',
        prepositions:[
          { text: 'of', isCorrect: true },
          { text: '-' },
          { text: 'at' },
          { text: 'for' },
          { text: 'to' }
        ]
      }
    ]
  },

  //argue
  {
    text: 'argue',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'с кем-то',
        prepositions:[
          { text: 'of' },
          { text: 'about' },
          { text: 'at' },
          { text: 'on' },
          { text: 'with', isCorrect: true }
        ]
      },
      {
        text : 'smth',
        comment: 'по поводу чего-то',
        prepositions:[
          { text: 'about', isCorrect: true },
          { text: 'of' },
          { text: 'for' },
          { text: 'on' },
          { text: 'with' }
        ]
      }
    ]
  },

  //arrive
  {
    text: 'arrive',
    afterBe: false,
    complements:[
      {
        text : 'destination as a point',
        comment: 'в «маленькие» места: гостиницы, аэропорты, вокзалы, дома и т.д.',
        prepositions:[
          { text: 'in' },
          { text: '-' },
          { text: 'at', isCorrect: true },
          { text: 'for' },
          { text: 'to' }
        ]
      },
      {
        text : 'destination as a larger area',
        comment: 'в «крупные» населенные пункты – города, страны, континенты',
        prepositions:[
          { text: 'in', isCorrect: true },
          { text: '-' },
          { text: 'at' },
          { text: 'for' },
          { text: 'to' }
        ]
      }
    ]
  },

  //ask
  {
    text:'ask',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'кого-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'about' },
          { text: 'for' },
          { text: 'on' },
          { text: 'with' }
        ]
      },
      {
        text : 'smth',
        comment: 'о чём-то',
        prepositions:[
          { text: 'about', isCorrect: true },
          { text: 'by' },
          { text: 'for' },
          { text: 'on' },
          { text: 'with' }
        ]
      }
    ]
  },

  //aware
  {
    text: 'aware',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'что-то',
        prepositions:[
          { text: 'of', isCorrect: true },
          { text: '-' },
          { text: 'at' },
          { text: 'for' },
          { text: 'about' }
        ]
      }
    ]
  },

  //bad
  {
    text: 'bad',
    afterBe: true,
    complements:[
      {
        text : '(doing) smth',
        comment: '(делая) что-то',
        prepositions:[
          { text: 'of' },
          { text: '-' },
          { text: 'at', isCorrect: true },
          { text: 'for' },
          { text: 'about' }
        ]
      }
    ]
  },

  //believe
  {
    text: 'believe',
    afterBe: false,
    complements:[
      {
        text : 'smth',
        comment: 'во что-то',
        prepositions:[
          { text: 'of' },
          { text: 'in', isCorrect: true },
          { text: 'at' },
          { text: 'for' },
          { text: 'about' }
        ]
      }
    ]
  },

  //belong
  {
    text: 'belong',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'кому-то',
        prepositions:[
          { text: 'of' },
          { text: '-' },
          { text: 'to', isCorrect: true },
          { text: 'for' },
          { text: 'with' }
        ]
      }
    ]
  },

  //bored
  {
    text: 'bored',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'от кого-то/чего-то',
        prepositions:[
          { text: 'on' },
          { text: '-' },
          { text: 'about' },
          { text: 'by', isCorrect: true },
          { text: 'with', isCorrect: true }
        ]
      }
    ]
  },

  //borrow
  {
    text: 'borrow',
    afterBe: false,
    complements:[
      {
        text : 'smth',
        comment: 'что-то',
        prepositions:[
          { text: 'on' },
          { text: '-', isCorrect: true },
          { text: 'about' },
          { text: 'by' },
          { text: 'with' }
        ]
      },
      {
        text : 'smb',
        comment: 'у кого-то',
        prepositions:[
          { text: 'of' },
          { text: 'from', isCorrect: true },
          { text: 'at' },
          { text: 'by' },
          { text: 'with' }
        ]
      }
    ]
  },

  //busy
  {
    text: 'busy',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'чем-то',
        prepositions:[
          { text: 'on' },
          { text: 'in' },
          { text: 'for' },
          { text: 'by' },
          { text: 'with', isCorrect: true }
        ]
      }
    ]
  },

  //care
  {
    text: 'care',
    afterBe: false,
    complements:[
      {
        text : 'something/someone when they matter to you/have value to you',
        comment: 'быть не безразличным к кому-то/чему-то',
        prepositions:[
          { text: 'on' },
          { text: 'about', isCorrect: true },
          { text: 'for' },
          { text: 'by' },
          { text: 'of' }
        ]
      },
      {
        text : 'someone or something if you provide the things they need, especially someone who is young, old, or ill',
        comment: 'заботиться/любить кого-то',
        prepositions:[
          { text: 'on' },
          { text: 'about' },
          { text: 'for', isCorrect: true },
          { text: 'by' },
          { text: 'of' }
        ]
      }
    ]
  },

  //clear
  {
    text: 'clear',
    afterBe: true,
    complements:[
      {
        text : 'smb',
        comment: 'кому-то',
        prepositions:[
          { text: 'on' },
          { text: 'for' },
          { text: 'to', isCorrect: true },
          { text: '-' }
        ]
      }
    ]
  },

  //compare
  {
    text: 'compare',
    afterBe: false,
    complements:[
      {
        text : 'this',
        comment: 'что-то',
        prepositions:[
          { text: 'on' },
          { text: 'for' },
          { text: 'of' },
          { text: 'to' },
          { text: '-', isCorrect: true }
        ]
      },
      {
        text : 'that (to point out similarities between things)',
        comment: 'с чем-то (чтобы подчеркнуть различия похожих вещей, стоящих в одном ряду)',
        prepositions:[
          { text: 'on' },
          { text: 'for' },
          { text: 'of' },
          { text: 'to' },
          { text: 'with', isCorrect: true }
        ]
      },
      {
        text : 'that (when noting both similarities and differences)',
        comment: 'с чем-то (не похожие предметы, например кожу со слоновой костью)',
        prepositions:[
          { text: 'on' },
          { text: 'for' },
          { text: 'of' },
          { text: 'to', isCorrect: true },
          { text: 'with' }
        ]
      }
    ]
  },

  //complain
  {
    text: 'complain',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'кому-то',
        prepositions:[
          { text: '-' },
          { text: 'to', isCorrect: true },
          { text: 'for' },
          { text: 'by' },
          { text: 'of' }
        ]
      },
      {
        text : 'smth',
        comment: 'на что-то',
        prepositions:[
          { text: 'on' },
          { text: 'about', isCorrect: true },
          { text: 'for' },
          { text: 'at' },
          { text: 'of' }
        ]
      }
    ]
  },

  //composed
  {
    text: 'composed',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'из чего-то',
        prepositions:[
          { text: 'of', isCorrect: true },
          { text: 'from' },
          { text: 'with' },
          { text: 'by' },
          { text: '-' }
        ]
      }
    ]
  },

  //concentrate
  {
    text: 'concentrate',
    afterBe: false,
    complements:[
      {
        text : 'smth',
        comment: 'на чём-то',
        prepositions:[
          { text: 'on', isCorrect: true },
          { text: 'to' },
          { text: 'with' },
          { text: 'at' },
          { text: 'of' }
        ]
      }
    ]
  },

  //congratulate
  {
    text: 'congratulate',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'кого-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'to' },
          { text: 'with' },
          { text: 'at' },
          { text: 'of' }
        ]
      },
      {
        text : 'smth',
        comment: ' c чем-то',
        prepositions:[
          { text: 'on', isCorrect: true },
          { text: 'for' },
          { text: 'with' },
          { text: 'at' },
          { text: 'of' }
        ]
      }
    ]
  },

  //consist
  {
    text: 'consist',
    afterBe: false,
    complements:[
      {
        text : 'smth',
        comment: 'из чего-то',
        prepositions:[
          { text: 'on' },
          { text: 'by' },
          { text: 'with' },
          { text: 'from' },
          { text: 'of', isCorrect: true }
        ]
      }
    ]
  },

  //crazy
  {
    text: 'crazy',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'по кому-то/чему-то',
        prepositions:[
          { text: 'on' },
          { text: 'by' },
          { text: 'with' },
          { text: 'about', isCorrect: true },
          { text: 'of' }
        ]
      }
    ]
  },

  //crowded
  {
    text: 'crowded',
    afterBe: true,
    complements:[
      {
        text : 'smb',
        comment: 'кем-то',
        prepositions:[
          { text: 'on' },
          { text: 'by' },
          { text: 'with', isCorrect: true },
          { text: 'at' },
          { text: 'of' }
        ]
      }
    ]
  },

  //date
  {
    text: 'date',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'с кем-то',
        prepositions:[
          { text: 'on' },
          { text: 'by' },
          { text: 'with', isCorrect: true },
          { text: '-' },
          { text: 'of' }
        ]
      }
    ]
  },

  //decide
  {
    text:'decide',
    afterBe: false,
    complements: [
      {
        text : 'smth',
        comment: 'что-то',
        prepositions:[
          { text: '-' },
          { text: 'to' },
          { text: 'for' },
          { text: 'about', isCorrect: true },
          { text: 'on', isCorrect: true }
        ]
      }
    ]
  },

  //depend
  {
    text:'depend',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        comment: 'от кого-то/чего-то',
        prepositions:[
          { text: '-' },
          { text: 'to' },
          { text: 'with' },
          { text: 'upon', isCorrect: true },
          { text: 'on', isCorrect: true }
        ]
      },
      {
        text : 'smth',
        comment: 'в чём-то',
        prepositions:[
          { text: 'about' },
          { text: 'by' },
          { text: 'of' },
          { text: 'to' },
          { text: 'for', isCorrect: true }
        ]
      }
    ]
  },

  //dependent
  {
    text:'dependent',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'от кого-то/чего-то',
        prepositions:[
          { text: '-' },
          { text: 'to' },
          { text: 'with' },
          { text: 'upon', isCorrect: true },
          { text: 'on', isCorrect: true }
        ]
      },
      {
        text : 'smth',
        comment: 'в чём-то',
        prepositions:[
          { text: 'about' },
          { text: 'by' },
          { text: 'of' },
          { text: 'to' },
          { text: 'for', isCorrect: true }
        ]
      }
    ]
  },

  //devoted
  {
    text: 'devoted',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кому-то/чему-то',
        prepositions:[
          { text: 'on' },
          { text: 'by' },
          { text: 'to', isCorrect: true },
          { text: 'for' },
          { text: 'of' }
        ]
      }
    ]
  },

  //different
  {
    text: 'different',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'от кого-то/чего-то',
        prepositions:[
          { text: 'on' },
          { text: 'from' },
          { text: 'to', isCorrect: true },
          { text: 'about' },
          { text: 'of' }
        ]
      }
    ]
  },

  //disagree
  {
    text:'disagree',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        comment: 'с кем-то/чем-то, декларирующим суть соглашения (a person, an opinion or a policy)',
        prepositions:[
          { text: 'of' },
          { text: 'about' },
          { text: 'for' },
          { text: 'on' },
          { text: 'with', isCorrect: true }
        ]
      },
      {
        text : 'smth',
        comment: 'c чем-то (по поводу чего-то, сутью дискуссиии)',
        prepositions:[
          { text: 'about', isCorrect: true },
          { text: 'by' },
          { text: 'for' },
          { text: 'on' },
          { text: 'with' }
        ]
      },
      {
        text : 'a matter for decision',
        comment: 'a plan, a date, etc, you decide jointly with others to do something',
        prepositions:[
          { text: 'about' },
          { text: 'by' },
          { text: 'for' },
          { text: 'on', isCorrect: true },
          { text: 'with' }
        ]
      }
    ]
  },

  //disappointed
  {
    text: 'disappointed',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'в ком-то/чём-то',
        prepositions:[
          { text: 'with' },
          { text: 'in', isCorrect: true },
          { text: 'by' },
          { text: 'about' },
          { text: 'on' }
        ]
      }
    ]
  },

  //disapprove
  {
    text: 'disapprove',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кого-то/что-то',
        prepositions:[
          { text: 'of', isCorrect: true },
          { text: '-' },
          { text: 'at' },
          { text: 'for' },
          { text: 'to' }
        ]
      }
    ]
  },

  //discuss
  {
    text: 'discuss',
    afterBe: false,
    complements:[
      {
        text : 'smth',
        comment: 'что-то',
        prepositions:[
          { text: 'of' },
          { text: '-', isCorrect: true },
          { text: 'at' },
          { text: 'for' },
          { text: 'to' }
        ]
      },
      {
        text : 'smb',
        comment: 'с кем-то',
        prepositions:[
          { text: 'of' },
          { text: 'with', isCorrect: true },
          { text: 'at' },
          { text: '-' },
          { text: 'to' }
        ]
      }
    ]
  },

  //divide
  {
    text: 'divide',
    afterBe: false,
    complements:[
      {
        text : 'this',
        comment: 'что-то',
        prepositions:[
          { text: 'of' },
          { text: '-', isCorrect: true },
          { text: 'at' },
          { text: 'for' },
          { text: 'to' }
        ]
      },
      {
        text : 'smth',
        comment: 'на что-то',
        prepositions:[
          { text: 'by' },
          { text: 'into', isCorrect: true },
          { text: 'to' },
          { text: 'in' },
          { text: 'at' }
        ]
      }
    ]
  },

  //divorced
  {
    text: 'divorced',
    afterBe: true,
    complements:[
      {
        text : 'smb',
        comment: 'с кем-то',
        prepositions:[
          { text: 'of' },
          { text: 'with' },
          { text: 'at' },
          { text: 'from', isCorrect: true },
          { text: 'to' }
        ]
      }
    ]
  },

  //done
  {
    text: 'done',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'с чем-то',
        prepositions:[
          { text: 'of' },
          { text: 'with', isCorrect: true },
          { text: 'at' },
          { text: 'from' },
          { text: 'on' }
        ]
      }
    ]
  },

  //dream
  {
    text: 'dream',
    afterBe: false,
    complements:[
      {
        text : 'smth (= imagine, want)',
        comment: 'о чем-то (в значении хотеть, представлять)',
        prepositions:[
          { text: 'of', isCorrect: true },
          { text: 'about' },
          { text: 'at' },
          { text: 'with' },
          { text: 'for' }
        ]
      },
      {
        text : 'smth (while sleeping)',
        comment: 'о чем-то (во сне)',
        prepositions:[
          { text: 'of', isCorrect: true },
          { text: 'about', isCorrect: true },
          { text: 'at' },
          { text: 'with' },
          { text: 'for' }
        ]
      }
    ]
  },

  //engaged
  {
    text: 'engaged',
    afterBe: true,
    complements:[
      {
        text : 'smb',
        comment: 'с кем-то',
        prepositions:[
          { text: 'of' },
          { text: 'with' },
          { text: 'at' },
          { text: 'to', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //equal
  {
    text: 'equal',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'чему-то',
        prepositions:[
          { text: 'of' },
          { text: 'with' },
          { text: 'at' },
          { text: 'to', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //escape
  {
    text: 'escape',
    afterBe: false,
    complements:[
      {
        text : 'smth',
        comment: 'от чего-то',
        prepositions:[
          { text: 'of' },
          { text: 'with' },
          { text: 'by' },
          { text: 'from', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //excited
  {
    text: 'excited',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'по поводу чего-то',
        prepositions:[
          { text: 'of' },
          { text: 'with' },
          { text: 'by' },
          { text: 'about', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //excuse
  {
    text: 'excuse',
    afterBe: true,
    complements:[
      {
        text : 'smb',
        comment: 'кого-то',
        prepositions:[
          { text: 'of' },
          { text: 'at' },
          { text: 'by' },
          { text: '-', isCorrect: true },
          { text: 'on' }
        ]
      },
      {
        text : 'smth',
        comment: 'за что-то',
        prepositions:[
          { text: 'of' },
          { text: 'at' },
          { text: 'about' },
          { text: 'for', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //exhausted
  {
    text: 'exhausted',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'от чего-то',
        prepositions:[
          { text: 'of' },
          { text: 'with' },
          { text: 'by' },
          { text: 'from', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //familiar
  {
    text:'familiar',
    afterBe: true,
    complements: [
      {
        text : 'smb',
        comment: 'с кем-то',
        prepositions:[
          { text: '-' },
          { text: 'to' },
          { text: 'about' },
          { text: 'with', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //forgove
  {
    text:'forgive',
    afterBe: false,
    complements: [
      {
        text : 'smb',
        comment: 'кого-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'to' },
          { text: 'of' },
          { text: 'with' },
          { text: 'on' }
        ]
      },
      {
        text : 'smth',
        comment: 'за что-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: 'of' },
          { text: 'about' },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //friendly
  {
    text:'friendly',
    afterBe: true,
    complements: [
      {
        text : 'smb (behave in a friendly manner toward someone. You do not need to be acquainted with the person.)',
        comment: 'с кем-то (вести себя дружелюбно с кем-то. Тебе нет необходимости знать этого человека)',
        prepositions:[
          { text: 'for' },
          { text: 'to', isCorrect: true },
          { text: 'about' },
          { text: 'with' },
          { text: 'on' }
        ]
      },
      {
        text : 'smb (have a friendly relationship with someone)',
        comment: 'с кем-то (иметь дружеские взаимоотношения с кем-то)',
        prepositions:[
          { text: 'for' },
          { text: 'to' },
          { text: 'about' },
          { text: 'with', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //frightened
  {
    text:'frightened',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth (which may or may not exist or happen)',
        comment: 'кем-то/чем-то (что могло или не могло существовать или произойти)',
        prepositions:[
          { text: 'by' },
          { text: 'about' },
          { text: 'of', isCorrect: true },
          { text: 'with' },
          { text: 'on' }
        ]
      },
      {
        text : 'smb/smth (which actually happened to subject in the past)',
        comment: 'кем-то/чем-то (реально случившимся для субъекта в прошлом)',
        prepositions:[
          { text: 'by', isCorrect: true },
          { text: 'about' },
          { text: 'of' },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //full
  {
    text:'full',
    afterBe: true,
    complements: [
      {
        text : 'smth',
        comment: 'чего-то',
        prepositions:[
          { text: 'by' },
          { text: 'to' },
          { text: 'of', isCorrect: true },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //get rid
  {
    text:'get rid',
    afterBe: false,
    complements: [
      {
        text : 'smth',
        comment: 'от чего-то',
        prepositions:[
          { text: 'from' },
          { text: '-' },
          { text: 'of', isCorrect: true },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //gone
  {
    text:'gone',
    afterBe: true,
    complements: [
      {
        text : 'somewhere',
        comment: 'откуда-то',
        prepositions:[
          { text: 'from', isCorrect: true },
          { text: '-' },
          { text: 'of' },
          { text: 'with' },
          { text: 'by' }
        ]
      }
    ]
  },

  //good
  {
    text:'good',
    afterBe: true,
    complements: [
      {
        text : 'smth',
        comment: 'для чего-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: '-' },
          { text: 'at' },
          { text: 'with' },
          { text: 'by' }
        ]
      }
    ]
  },

  //graduate
  {
    text:'graduate',
    afterBe: false,
    complements: [
      {
        text : 'somewhere',
        comment: 'откуда-то',
        prepositions:[
          { text: 'from', isCorrect: true },
          { text: '-' },
          { text: 'of' },
          { text: 'with' },
          { text: 'by' }
        ]
      }
    ]
  },

  //happen
  {
    text:'happen',
    afterBe: false,
    complements: [
      {
        text : 'smb',
        comment: 'с кем-то',
        prepositions:[
          { text: 'to', isCorrect: true },
          { text: 'on' },
          { text: 'of' },
          { text: 'with' },
          { text: 'by' }
        ]
      }
    ]
  },

  //hear
  {
    text:'hear',
    afterBe: false,
    complements: [
      {
        text : 'smb/smth = you have heard the news about smb/smth',
        comment: 'о ком-то/чём-то (в значении слышал ли ты новости о ком-то/чём-то)',
        prepositions:[
          { text: 'about', isCorrect: true },
          { text: 'on' },
          { text: 'of' },
          { text: 'for' },
          { text: 'at' }
        ]
      },
      {
        text : 'smb/smth = you know who/what smb/smth is',
        comment: 'о ком-то/чём-то (в значении ты знаешь кого-то/что-то)',
        prepositions:[
          { text: 'about' },
          { text: 'on' },
          { text: 'of', isCorrect: true },
          { text: 'for' },
          { text: '-' }
        ]
      },
      {
        text : 'smb',
        comment: 'от кого-то',
        prepositions:[
          { text: 'from', isCorrect: true },
          { text: 'by' },
          { text: 'of' },
          { text: 'for' },
          { text: 'about' }
        ]
      }
    ]
  },

  //help
  {
    text: 'help',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'кому-то',
        prepositions:[
          { text: 'of' },
          { text: '-', isCorrect: true },
          { text: 'at' },
          { text: 'for' },
          { text: 'to' }
        ]
      },
      {
        text : 'smth',
        comment: 'с чем-то',
        prepositions:[
          { text: 'of' },
          { text: 'with', isCorrect: true },
          { text: 'at' },
          { text: 'in' },
          { text: 'to' }
        ]
      }
    ]
  },

  //hide
  {
    text: 'hide',
    afterBe: false,
    complements:[
      {
        text : 'smth',
        comment: 'что-то',
        prepositions:[
          { text: 'of' },
          { text: '-', isCorrect: true },
          { text: 'at' },
          { text: 'for' },
          { text: 'to' }
        ]
      },
      {
        text : 'smb',
        comment: 'от кого-то',
        prepositions:[
          { text: 'of' },
          { text: 'with' },
          { text: 'from', isCorrect: true },
          { text: '-' },
          { text: 'out' }
        ]
      }
    ]
  },

  //hope
  {
    text:'hope',
    afterBe: false,
    complements: [
      {
        text : 'smth',
        comment: 'на что-то',
        prepositions:[
          { text: 'of' },
          { text: 'to' },
          { text: 'for', isCorrect: true },
          { text: 'about' },
          { text: 'on' }
        ]
      }
    ]
  },

  //hungry
  {
    text:'hungry',
    afterBe: true,
    complements: [
      {
        text : 'smth',
        comment: 'в переносном смысле, например к знаниям и тп.',
        prepositions:[
          { text: '-' },
          { text: 'to' },
          { text: 'for', isCorrect: true },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //insist
  {
    text:'insist',
    afterBe: false,
    complements:[
      {
        text : 'smth',
        comment: 'на чём-то',
        prepositions:[
          { text: '-' },
          { text: 'on', isCorrect: true },
          { text: 'to' },
          { text: 'at' },
          { text: 'for' }
        ]
      }
    ]
  },

  //interested
  {
    text:'interested',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'в чём-то',
        prepositions:[
          { text: '-' },
          { text: 'on' },
          { text: 'for' },
          { text: 'with' },
          { text: 'in', isCorrect: true }
        ]
      }
    ]
  },

  //introduce
  {
    text: 'introduce',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'кого-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'on' },
          { text: 'with' },
          { text: 'of' },
          { text: 'by' },
          { text: 'about' }
        ]
      }, {
        text: 'smb',
        comment: 'кому-то',
        prepositions:[
          { text: '-' },
          { text: 'for' },
          { text: 'with' },
          { text: 'to', isCorrect: true },
          { text: 'by' }
        ]
      }
    ]
  },

  //invite
  {
    text: 'invite',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'кого-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'on' },
          { text: 'with' },
          { text: 'of' },
          { text: 'by' },
          { text: 'about' }
        ]
      }, {
        text: 'smb',
        comment: 'к кому-то',
        prepositions:[
          { text: '-' },
          { text: 'for' },
          { text: 'with' },
          { text: 'to', isCorrect: true },
          { text: 'by' }
        ]
      }
    ]
  },

  //involved
  {
    text:'involved',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'во что-то',
        prepositions:[
          { text: '-' },
          { text: 'on' },
          { text: 'with' },
          { text: 'for' },
          { text: 'by' },
          { text: 'in', isCorrect: true }
        ]
      }
    ]
  },

  //kind
  {
    text:'kind',
    afterBe: true,
    complements:[
      {
        text : 'smb',
        comment: 'к кому-то',
        prepositions:[
          { text: '-' },
          { text: 'to', isCorrect: true },
          { text: 'with' },
          { text: 'for' },
          { text: 'about' },
          { text: 'on' }
        ]
      }
    ]
  },

  //know
  {
    text:'know',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'о чём-то',
        prepositions:[
          { text: '-' },
          { text: 'of' },
          { text: 'from' },
          { text: 'about', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //laugh
  {
    text:'laugh',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'над кем-то',
        prepositions:[
          { text: '-' },
          { text: 'at', isCorrect: true },
          { text: 'over' },
          { text: 'about' },
          { text: 'on' }
        ]
      }
    ]
  },

  //listen
  {
    text:'listen',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'кого-то',
        prepositions:[
          { text: '-' },
          { text: 'to', isCorrect: true },
          { text: 'for' },
          { text: 'on' }
        ]
      }
    ]
  },

  //look
  {
    text:'look',
    afterBe: false,
    complements: [
      {
        text : 'smb',
        comment: 'присматривать за кем-то',
        prepositions:[
          { text: 'for' },
          { text: 'after', isCorrect: true },
          { text: 'on' },
          { text: 'about' },
          { text: 'of' }
        ]
      }, 
      {
        text : 'smb/smth',
        comment: 'на кого-то/что-то',
        prepositions:[
          { text: '-' },
          { text: 'to' },
          { text: 'at', isCorrect: true },
          { text: 'on' },
          { text: 'of' }
        ]
      }, 
      {
        text : 'smth',
        comment: 'искать что-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: 'to' },
          { text: 'of' },
          { text: 'through' }
        ]
      }, 
      {
        text : 'smth',
        comment: 'с нетерпением ждать чего-то',
        prepositions:[
          { text: 'forward to', isCorrect: true },
          { text: 'forward for' },
          { text: 'forward of' },
          { text: 'forward about' }
        ]
      }, 
      {
        text : 'smth',
        comment: 'просматривать(газеты, записи и тп.)',
        prepositions:[
          { text: 'from' },
          { text: 'for' },
          { text: 'into' },
          { text: 'of' },
          { text: 'through', isCorrect: true }
        ]
      }
    ]
  },

  //mad
  {
    text:'mad',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'от кого-то/чего-то',
        prepositions:[
          { text: 'with' },
          { text: 'at', isCorrect: true },
          { text: 'about' },
          { text: 'of' },
          { text: 'on' }
        ]
      }
    ]
  },

  //made
  {
    text:'made',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'из чего-то (первоначальный продукт сохраняется, присутствует в продукте, изделии)',
        prepositions:[
          { text: 'under' },
          { text: 'of', isCorrect: true },
          { text: 'from' },
          { text: 'with' }
        ]
      },
      {
        text : 'smth',
        comment: 'извлекать что-то из чего-то (конечный продукт отличается от первоначального)',
        prepositions:[
          { text: 'under' },
          { text: 'of' },
          { text: 'from', isCorrect: true },
          { text: 'with' }
        ]
      }
    ]
  },

  //married
  {
    text:'married',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'на ком-то',
        prepositions:[
          { text: 'with' },
          { text: 'at' },
          { text: 'to', isCorrect: true },
          { text: 'of' },
          { text: 'on' }
        ]
      }
    ]
  },

  //matter
  {
    text:'matter',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        comment: 'для',
        prepositions:[
          { text: 'for' },
          { text: 'about' },
          { text: 'to', isCorrect: true },
          { text: 'of' },
          { text: 'on' }
        ]
      }
    ]
  },

  //matter
  {
    text:'the matter',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'что-то происходит с кем-то',
        prepositions:[
          { text: 'for' },
          { text: 'about' },
          { text: 'with', isCorrect: true },
          { text: 'of' },
          { text: 'on' }
        ]
      }
    ]
  },

  //multiply
  {
    text:'multiply',
    afterBe: false,
    complements:[
      {
        text : 'this',
        comment: 'что-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'with' },
          { text: 'to' },
          { text: 'of' },
          { text: 'on' }
        ]
      },
      {
        text : 'that',
        comment: 'на что-то',
        prepositions:[
          { text: 'by', isCorrect: true },
          { text: 'with' },
          { text: 'to' },
          { text: 'of' },
          { text: 'on' }
        ]
      }
    ]
  },

  //nice
  {
    text:'nice',
    afterBe: true,
    complements:[
      {
        text : 'smb',
        comment: 'по отношению к кому-то',
        prepositions:[
          { text: 'for' },
          { text: 'about' },
          { text: 'with' },
          { text: 'to', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //opposed
  {
    text:'opposed',
    afterBe: true,
    complements:[
      {
        text : 'smb',
        comment: 'по отношению к кому-то',
        prepositions:[
          { text: 'for' },
          { text: 'from' },
          { text: 'with' },
          { text: 'to', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //pay
  {
    text:'pay',
    afterBe: false,
    complements:[
      {
        text : 'smth',
        comment: 'за что-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: '-' },
          { text: 'of' },
          { text: 'to' },
          { text: 'on' }
        ]
      }
    ]
  },

  //patient
  {
    text:'patient',
    afterBe: true,
    complements:[
      {
        text : 'smb',
        comment: 'по отношению к кому-то',
        prepositions:[
          { text: 'for' },
          { text: 'from' },
          { text: 'with', isCorrect: true },
          { text: 'to' },
          { text: 'on' }
        ]
      }
    ]
  },

  //pleased
  {
    text:'pleased',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кем-то/чем-то',
        prepositions:[
          { text: 'for' },
          { text: 'from' },
          { text: 'with', isCorrect: true },
          { text: 'to' },
          { text: 'on' }
        ]
      }
    ]
  },

  //point
  {
    text:'point',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кого-то/что-то',
        prepositions:[
          { text: 'in' },
          { text: 'at', isCorrect: true },
          { text: 'of' },
          { text: 'to' },
          { text: 'on' }
        ]
      }
    ]
  },

  //polite
  {
    text:'polite',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'с кем-то/чем-то',
        prepositions:[
          { text: 'for' },
          { text: 'about' },
          { text: 'with' },
          { text: 'to', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //prepared
  {
    text:'prepared',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'к чему-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: 'about' },
          { text: 'to' },
          { text: 'on' }
        ]
      }
    ]
  },

  //protect
  {
    text:'protect',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кого-то/что-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'about' },
          { text: 'with' },
          { text: 'on' },
          { text: 'of' }
        ]
      },
      {
        text : 'smb/smth',
        comment: 'от кого-то/чего-то',
        prepositions:[
          { text: 'over' },
          { text: 'from', isCorrect: true },
          { text: 'on' },
          { text: 'of' }
        ]
      }
    ]
  },

  //proud
  {
    text:'proud',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кем-то/чем-то',
        prepositions:[
          { text: 'for' },
          { text: 'about' },
          { text: 'of', isCorrect: true },
          { text: 'by' },
          { text: 'on' }
        ]
      }
    ]
  },

  //qualified
  {
    text:'qulified',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'для чего-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: 'to' },
          { text: 'of' },
          { text: 'in' },
          { text: 'on' }
        ]
      }
    ]
  },

  //ready
  {
    text:'ready',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'для чего-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: '-' },
          { text: 'of' },
          { text: 'in' },
          { text: 'on' }
        ]
      }
    ]
  },

  //related
  {
    text:'related',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'к чему-то',
        prepositions:[
          { text: 'for' },
          { text: 'to', isCorrect: true },
          { text: 'of' },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //rely
  {
    text:'rely',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        comment: 'на кого-то/что-то',
        prepositions:[
          { text: 'for' },
          { text: 'to' },
          { text: 'of' },
          { text: 'upon', isCorrect: true },
          { text: 'on', isCorrect: true }
        ]
      }
    ]
  },

  //remind
  {
    text:'remind',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'кому-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'of' },
          { text: 'for' },
          { text: 'on' }
        ]
      }, 
      {
        text : 'smb/smth',
        comment: 'кого-то/что-то (когда речь о схожести людей, предметов или явлений)',
        prepositions:[
          { text: 'for' },
          { text: 'about' },
          { text: 'of', isCorrect: true },
          { text: 'by' },
          { text: 'on' }
        ]
      }, 
      {
        text : 'smth',
        comment: 'что-то (чтобы не забыл, например курицу в духовке)',
        prepositions:[
          { text: 'for' },
          { text: 'about', isCorrect: true },
          { text: 'of' },
          { text: 'by' },
          { text: 'on' }
        ]
      }
    ]
  },

  //responsible
  {
    text:'responsible',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'за кого-то/что-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: 'about' },
          { text: 'of' },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //satisfied
  {
    text:'satisfied',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кем-то/чем-то',
        prepositions:[
          { text: 'by' },
          { text: 'about' },
          { text: 'of' },
          { text: 'with', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //scared
  {
    text:'scared',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth (which may or may not exist or happen)',
        comment: 'кем-то/чем-то (что могло или не могло существовать или произойти)',
        prepositions:[
          { text: 'by' },
          { text: 'about' },
          { text: 'of', isCorrect: true },
          { text: 'with' },
          { text: 'on' }
        ]
      },
      {
        text : 'smb/smth (which actually happened to subject in the past)',
        comment: 'кем-то/чем-то (реально случившимся для субъекта в прошлом)',
        prepositions:[
          { text: 'by', isCorrect: true },
          { text: 'about' },
          { text: 'of' },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //search
  {
    text:'search',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кого-то/что-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: '-' },
          { text: 'of' },
          { text: 'about' },
          { text: 'on' }
        ]
      }
    ]
  },

  //separate
  {
    text:'separate',
    afterBe: false,
    complements:[
      {
        text : 'this',
        comment: 'что-то',
        prepositions:[
          { text: 'by' },
          { text: '-', isCorrect: true },
          { text: 'of' },
          { text: 'about' },
          { text: 'on' }
        ]
      },
      {
        text : 'that',
        comment: 'от чего-то',
        prepositions:[
          { text: 'by' },
          { text: 'with' },
          { text: 'of' },
          { text: 'from', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //similar
  {
    text:'similar',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кому-то/чему-то',
        prepositions:[
          { text: 'for' },
          { text: '-' },
          { text: 'of' },
          { text: 'about' },
          { text: 'to', isCorrect: true }
        ]
      }
    ]
  },

  //sorry
  {
    text:'sorry',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'о чём-то',
        prepositions:[
          { text: 'for' },
          { text: '-' },
          { text: 'of' },
          { text: 'about', isCorrect: true },
          { text: 'to' }
        ]
      },
      {
        text : 'smb',
        comment: 'кого-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: '-' },
          { text: 'of' },
          { text: 'about' },
          { text: 'to' }
        ]
      }
    ]
  },

  //speak
  {
    text:'speak',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'с кем-то',
        prepositions:[
          { text: 'with', isCorrect: true },
          { text: '-' },
          { text: 'of' },
          { text: 'about' },
          { text: 'to', isCorrect: true }
        ]
      },
      {
        text : 'smth',
        comment: 'о чём-то',
        prepositions:[
          { text: 'for' },
          { text: '-' },
          { text: 'of' },
          { text: 'about', isCorrect: true },
          { text: 'to' }
        ]
      }
    ]
  },

  //stare
  {
    text:'stare',
    afterBe: false,
    complements:[
      {
        text : 'smb/smth',
        comment: 'на кого-то',
        prepositions:[
          { text: 'on' },
          { text: 'in' },
          { text: 'of' },
          { text: 'at', isCorrect: true },
          { text: 'to' }
        ]
      }
    ]
  },

  //stop
  {
    text:'stop',
    afterBe: false,
    complements:[
      {
        text : 'smth',
        comment: 'от чего-то',
        prepositions:[
          { text: 'for' },
          { text: 'from', isCorrect: true },
          { text: 'of' },
          { text: 'by' },
          { text: 'on' }
        ]
      }
    ]
  },

  //substruct
  {
    text:'substruct',
    afterBe: false,
    complements:[
      {
        text : 'this',
        comment: 'что-то',
        prepositions:[
          { text: 'by' },
          { text: '-', isCorrect: true },
          { text: 'of' },
          { text: 'about' },
          { text: 'on' }
        ]
      },
      {
        text : 'that',
        comment: 'из чего-то',
        prepositions:[
          { text: 'by' },
          { text: 'with' },
          { text: 'of' },
          { text: 'from', isCorrect: true },
          { text: 'in' }
        ]
      }
    ]
  },

  //sure
  {
    text:'sure',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'в чём-то',
        prepositions:[
          { text: 'at' },
          { text: 'of', isCorrect: true },
          { text: 'in' },
          { text: 'on' }
        ]
      }
    ]
  },

  //suffer
  {
    text:'suffer',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'от чего-то',
        prepositions:[
          { text: 'at' },
          { text: 'of' },
          { text: 'from', isCorrect: true },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //take care
  {
    text:'take care',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'о ком-то',
        prepositions:[
          { text: '-' },
          { text: 'for' },
          { text: 'of', isCorrect: true },
          { text: 'about' },
          { text: 'on' }
        ]
      }
    ]
  },

  //talk
  {
    text:'talk',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'с кем-то',
        prepositions:[
          { text: 'with', isCorrect: true },
          { text: '-' },
          { text: 'of' },
          { text: 'about' },
          { text: 'to', isCorrect: true }
        ]
      },
      {
        text : 'smth',
        comment: 'о чём-то',
        prepositions:[
          { text: 'for' },
          { text: '-' },
          { text: 'of' },
          { text: 'about', isCorrect: true },
          { text: 'to' }
        ]
      }
    ]
  },

  //tell
  {
    text:'tell',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'с кем-то',
        prepositions:[
          { text: 'with' },
          { text: '-', isCorrect: true },
          { text: 'of' },
          { text: 'about' },
          { text: 'to' }
        ]
      },
      {
        text : 'smth',
        comment: 'о чём-то',
        prepositions:[
          { text: 'for' },
          { text: '-' },
          { text: 'of' },
          { text: 'about', isCorrect: true },
          { text: 'to' }
        ]
      }
    ]
  },

  //terrified
  {
    text:'terrified',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кем-то/чем-то',
        prepositions:[
          { text: 'by', isCorrect: true },
          { text: 'about' },
          { text: 'of', isCorrect: true },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //thank
  {
    text:'thank',
    afterBe: false,
    complements:[
      {
        text : 'smb',
        comment: 'кому-то',
        prepositions:[
          { text: 'with' },
          { text: '-', isCorrect: true },
          { text: 'of' },
          { text: 'for' },
          { text: 'to' }
        ]
      },
      {
        text : 'smth',
        comment: 'за что-то',
        prepositions:[
          { text: 'for', isCorrect: true },
          { text: 'on' },
          { text: 'of' },
          { text: 'about' },
          { text: 'to' }
        ]
      }
    ]
  },

  //thirsty
  {
    text:'thirsty',
    afterBe: true,
    complements: [
      {
        text : 'smth',
        comment: 'в переносном смысле, например к знаниям и тп.',
        prepositions:[
          { text: '-' },
          { text: 'to' },
          { text: 'for', isCorrect: true },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //tired
  {
    text:'tired',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'кем-то/чем-то',
        prepositions:[
          { text: 'by' },
          { text: 'about' },
          { text: 'of', isCorrect: true },
          { text: 'with' },
          { text: 'on' }
        ]
      }
    ]
  },

  //travel
  {
    text:'travel',
    afterBe: false,
    complements:[
      {
        text : 'somewhere',
        comment: 'куда-то',
        prepositions:[
          { text: '-' },
          { text: 'in' },
          { text: 'of' },
          { text: 'to', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //upset
  {
    text:'upset',
    afterBe: 'any',
    complements: [
      {
        text : 'smb',
        comment: 'кого-то',
        prepositions:[
          { text: '-', isCorrect: true },
          { text: 'to' },
          { text: 'on' }
        ]
      }, 
      {
        text : 'smb',
        comment: 'в ком-то',
        prepositions:[
          { text: '-' },
          { text: 'about' },
          { text: 'with', isCorrect: true },
          { text: 'on' },
          { text: 'at' }
        ]
      }, 
      {
        text : 'smth',
        comment: 'чем-то',
        prepositions:[
          { text: '-' },
          { text: 'about', isCorrect: true },
          { text: 'with' },
          { text: 'on' },
          { text: 'at' }
        ]
      }
    ]
  },

  //wait
  {
    text:'wait',
    afterBe: false,
    complements: [
      {
        text : 'smb/smth',
        comment: 'кого-то/что-то',
        prepositions:[
          { text: '-' },
          { text: 'to' },
          { text: 'for', isCorrect: true },
          { text: 'about' },
          { text: 'on' }
        ]
      }
    ]
  },

  //word-class
  {
    text:'world-class',
    afterBe: true,
    complements:[
      {
        text : 'smth',
        comment: 'в чём-то',
        prepositions:[
          { text: 'in' },
          { text: 'of' },
          { text: 'with' },
          { text: 'at', isCorrect: true },
          { text: 'on' }
        ]
      }
    ]
  },

  //worried
  {
    text:'worried',
    afterBe: true,
    complements:[
      {
        text : 'smb/smth',
        comment: 'о ком-то/чём-то',
        prepositions:[
          { text: 'about', isCorrect: true },
          { text: 'of' },
          { text: 'with' },
          { text: 'at' },
          { text: 'on' }
        ]
      }
    ]
  }

];