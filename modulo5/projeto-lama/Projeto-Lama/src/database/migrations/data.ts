import { IUserDB, USER_ROLES } from "../../models/User"
import { IShowDB } from "../../models/Show";

export const users: IUserDB[] = [
    {
        id: "101",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
        role: USER_ROLES.ADMIN
    },
    {
        id: "102",
        name: "Fulano",
        email: "fulano@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
        role: USER_ROLES.NORMAL
    },
    {
        id: "103",
        name: "Ciclana",
        email: "ciclana@gmail.com",
        password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i", // asdfg123
        role: USER_ROLES.NORMAL
    }
]

export const shows: IShowDB[] = [
    {
      id: "1000",
      band: "iron Maden",
      startsAt: new Date("2022/12/05")
    },
    {
      id: "1001",
      band: "The Off Spring",
      startsAt: new Date("2022/12/06")
    },
    {
      id: "1002",
      band: "The National",
      startsAt: new Date("2022/12/07")
    },
    {
      id: "1003",
      band: "System of a Down",
      startsAt: new Date("2022/12/08")
    },
  ]