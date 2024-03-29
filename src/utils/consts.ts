import {Work} from "./types";

export const requestTime = 1000


export const iWorksMock:Work[] = [
    {
        id: 1,
        name: "Фотолитография внутренних слоев",
        description: "На поверхность платы наносится тонкий слой фоторезиста, который является светочувствительной пленкой. Плата помещается под ультрафиолетовую лампу или лазер, чтобы фоторезист был экспонирован к свету через маску. Используя специальный раствор, фоторезист, который не был экспонирован к свету, удаляется, оставляя топологию токопроводящих медных слоев на поверхности платы..",
        image: "",
        status: 1,
        price: 1000
    },
    {
        id: 2,
        name: "Травление внутренних слоев",
        description: "Плату погружают в химический раствор, который растворяет не защищенные медные поверхности, оставляя только топологию слоев меди. Фоторезист, который ранее был использован для защиты меди от травления, удаляется с поверхности платы.",
        image: "",
        status: 1,
        price: 2000
    },
    {
        id: 3,
        name: "АОИ внутренних слоев",
        description: "Автоматическая оптическая инспекция внутренних слоев проводится для проверки и обнаружения дефектов и несоответствий в топологии слоев меди.",
        image: "",
        status: 1,
        price: 3000
    },
    {
        id: 4,
        name: "Прессование",
        description: "Поверхность платы покрывается слоем оксида, который сформирует диэлектрическую изоляцию. При высоких температурах и давлении между слоями платы происходит прессование, чтобы обеспечить механическую прочность платы и обеспечить электрическую связь между слоями.",
        image: "",
        status: 1,
        price: 5000
    },
    {
        id: 5,
        name: "Вскрытие базовых отверстий",
        description: "Базовые отверстия, необходимые для прохождения проводников через слои платы, пробиваются.",
        price: 2114,
        status: 1,
        image: ""
    },
    {
        id: 6,
        name: "Сверление сквозных отверстий",
        description: "Сквозные отверстия сверлятся через все слои платы для подключения различных компонентов.",
        price: 1250,
        status: 1,
        image: ""
    },

]