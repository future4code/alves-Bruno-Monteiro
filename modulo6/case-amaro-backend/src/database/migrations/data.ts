import { IProductDB, ITagsDB, ITagsProductsDB } from "../../models/Products"


export const products: IProductDB[] = [
    {
        id: "8371",
        name: "VESTIDO TRICOT CHEVRON"
    },
    {
        id: "8367",
        name: "VESTIDO MOLETOM COM CAPUZ MESCLA"
    },
    {
        id: "8363",
        name: "VESTIDO CURTO MANGA LONGA LUREX"
    },
    {
        id: "8360",
        name: "VESTIDO FEMININO CANELADO"
    },
    {
        id: "8358",
        name: "VESTIDO REGATA FEMININO COM GOLA"
    },
    {
        id: "8314",
        name: "VESTIDO PLISSADO ACINTURADO"
    },
    {
        id: "8311",
        name: "VESTIDO SLIPDRESS CETIM"
    },
    {
        id: "8310",
        name: "VESTIDO CURTO PONTO ROMA MANGA"
    },
    {
        id: "8309",
        name: "VESTIDO MOLETOM COM CAPUZ"
    },
    {
        id: "8301",
        name: "VESTIDO LONGO CREPE MANGA COMPRIDA"
    },
    {
        id: "8300",
        name: "VESTIDO MALHA COM FENDA"
    },
    {
        id: "8293",
        name: "VESTIDO CURTO VELUDO RECORTE GOLA"
    },
    {
        id: "8291",
        name: "VESTIDO MANGA COMPRIDA COSTAS"
    },
    {
        id: "8264",
        name: "VESTIDO CURTO VELUDO CRISTAL"
    },
    {
        id: "8119",
        name: "VESTIDO BABADOS KNIT"
    },
    {
        id: "8110",
        name: "VESTIDO CUT OUT TRICOT"
    },
    {
        id: "8109",
        name: "VESTIDO BABADOS HORIZONTAIS"
    },
    {
        id: "8104",
        name: "VESTIDO BABADO TURTLENECK"
    },
    {
        id: "8091",
        name: "VESTIDO MIDI VELUDO DECOTADO"
    },
    {
        id: "8083",
        name: "VESTIDO LONGO ESTAMPADO"
    },
    {
        id: "8080",
        name: "VESTIDO CURTO RENDA VISCOSE"
    },
    {
        id: "7613",
        name: "VESTIDO LONGO BABADO"
    },
    {
        id: "7533",
        name: "VESTIDO COTTON DOUBLE"
    },
    {
        id: "7518",
        name: "VESTIDO CAMISETA FANCY"
    },
    {
        id: "7516",
        name: "VESTIDO WRAP FLEUR"
    }
]

export const tags: ITagsDB[] = [
    {
        id: "101",
        tag: 'balada',
    },
    {
        id: "102",
        tag: 'neutro',
    },
    {
        id: "103",
        tag: 'delicado',
    },
    {
        id: "104",
        tag: 'festa',
    },
    {
        id: "105",
        tag: 'casual',
    },
    {
        id: "106",
        tag: 'metal',
    },
    {
        id: "107",
        tag: 'colorido',
    },
    {
        id: "108",
        tag: 'estampas',
    },
    {
        id: "109",
        tag: 'passeio',
    },
    {
        id: "110",
        tag: 'workwear',
    },
    {
        id: "111",
        tag: 'viagem',
    },
    {
        id: "112",
        tag: 'descolado',
    },
    {
        id: "113",
        tag: 'moderno',
    },
    {
        id: "114",
        tag: 'inverno',
    },
    {
        id: "115",
        tag: 'liso',
    },
    {
        id: "116",
        tag: 'basics',
    },
    {
        id: "117",
        tag: 'boho',
    },
    {
        id: "118",
        tag: 'elastano',
    },
    ,
    {
        id: "119",
        tag: 'festa',
    },
    {
        id: "120",
        tag: 'couro',
    },
]

export const tagsProducts: ITagsProductsDB[] = [
    {
        id: '201',
        product_id: '8371',
        tag_id: '101',
    },
    {
        id: '202',
        product_id: '8371',
        tag_id: '102',
    },
    {
        id: '203',
        product_id: '8371',
        tag_id: '103',
    },
    {
        id: '204',
        product_id: '8371',
        tag_id: '104',
    },
    {
        id: '205',
        product_id: '8367',
        tag_id: '105',
    },
    {
        id: '206',
        product_id: '8367',
        tag_id: '106',
    },
    {
        id: '207',
        product_id: '8363',
        tag_id: '107',
    },
    {
        id: '208',
        product_id: '8363',
        tag_id: '106',
    },
    {
        id: '209',
        product_id: '8363',
        tag_id: '103',
    },
    {
        id: '210',
        product_id: '8363',
        tag_id: '108',
    },
    {
        id: '211',
        product_id: '8363',
        tag_id: '109',
    },
    {
        id: '212',
        product_id: '8360',
        tag_id: '110',
    },
    {
        id: '213',
        product_id: '8360',
        tag_id: '111',
    },
    {
        id: '214',
        product_id: '8360',
        tag_id: '112',
    },
    {
        id: '215',
        product_id: '8358',
        tag_id: '113',
    },
    {
        id: '216',
        product_id: '8358',
        tag_id: '114',
    },
    {
        id: '217',
        product_id: '8358',
        tag_id: '115',
    },
    {
        id: '218',
        product_id: '8358',
        tag_id: '116',
    },
    {
        id: '219',
        product_id: '8314',
        tag_id: '105',
    },
    {
        id: '220',
        product_id: '8314',
        tag_id: '111',
    },
    {
        id: '221',
        product_id: '8314',
        tag_id: '103',
    },
    {
        id: '222',
        product_id: '8311',
        tag_id: '101',
    },
    {
        id: '223',
        product_id: '8311',
        tag_id: '106',
    },
    {
        id: '224',
        product_id: '8311',
        tag_id: '117',
    },
    {
        id: '225',
        product_id: '8311',
        tag_id: '112',
    },
    {
        id: '226',
        product_id: '8311',
        tag_id: '109',
    },
    {
        id: '227',
        product_id: '8310',
        tag_id: '105',
    },
    {
        id: '228',
        product_id: '8310',
        tag_id: '106',
    },
    {
        id: '229',
        product_id: '8310',
        tag_id: '103',
    },
    {
        id: '230',
        product_id: '8310',
        tag_id: '112',
    },
    {
        id: '231',
        product_id: '8310',
        tag_id: '118',
    },
    {
        id: '232',
        product_id: '8310',
        tag_id: '108',
    },
    {
        id: '233',
        product_id: '8309',
        tag_id: '114',
    },
    {
        id: '234',
        product_id: '8309',
        tag_id: '115',
    },
    {
        id: '235',
        product_id: '8309',
        tag_id: '105',
    },
    {
        id: '236',
        product_id: '8309',
        tag_id: '112',
    },
    {
        id: '237',
        product_id: '8301',
        tag_id: '105',
    },
]
  