"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagsProducts = exports.tags = exports.products = exports.users = void 0;
const User_1 = require("../../models/User");
exports.users = [
    {
        id: "101",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC",
        role: User_1.USER_ROLES.ADMIN
    },
    {
        id: "102",
        name: "Fulano",
        email: "fulano@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO",
        role: User_1.USER_ROLES.ADMIN
    },
    {
        id: "103",
        name: "Ciclana",
        email: "ciclana@gmail.com",
        password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i",
        role: User_1.USER_ROLES.ADMIN
    }
];
exports.products = [
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
];
exports.tags = [
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
];
exports.tagsProducts = [
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
];
//# sourceMappingURL=data.js.map