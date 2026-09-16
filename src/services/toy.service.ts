import { ToyModel } from "../models/toy.model"

export class ToyService {
    static getToys(): ToyModel[] {
        return [
            {
                id:             1,
                name:           'Drvene kocke u kutiji',
                description:    'Set od 100 obojenih drvenih kocki za slaganje i ucenje oblika.',
                type:           'Slagalica',
                minAge:         3,
                targetGroup:    'a',
                manufacturedAt: '2025-03-14',
                price:          2490,
                image:          'https://placehold.co/400x300?text=Kocke',
                reviews: [
                    {
                        author:    'Marija Petrovic',
                        rating:    5,
                        comment:   'Ivice su fino obradjene, nema trnja ni ostrih delova.',
                        createdAt: '2025-06-02'
                    },
                    {
                        author:    'Nikola Savanovic',
                        rating:    4,
                        comment:   'Lepe boje, kutija bi mogla da bude cvrsca.',
                        createdAt: '2025-07-11'
                    }
                ]
            },
            {
                id:             2,
                name:           'Plisani medved Bruno',
                description:    'Mekani plisani medved visine 40 cm od materijala prijatnog za kozu.',
                type:           'Figura',
                minAge:         1,
                targetGroup:    'a',
                manufacturedAt: '2025-01-20',
                price:          1890,
                image:          'https://placehold.co/400x300?text=Medved',
                reviews: [
                    {
                        author:    'Ana Antic',
                        rating:    5,
                        comment:   'Prala sam ga tri puta u masini i dalje izgleda kao nov.',
                        createdAt: '2025-05-19'
                    }
                ]
            },
            {
                id:             3,
                name:           'Trkacki auto na daljinski',
                description:    'Auto sa punjivom baterijom i daljinskim upravljacem, domet 30 metara.',
                type:           'Vozilo',
                minAge:         6,
                targetGroup:    'b',
                manufacturedAt: '2025-05-08',
                price:          5990,
                image:          'https://placehold.co/400x300?text=Auto',
                reviews: [
                    {
                        author:    'Aleksandar Vidakovic',
                        rating:    4,
                        comment:   'Brz je, baterija traje oko 40 minuta po punjenju.',
                        createdAt: '2025-08-01'
                    }
                ]
            },
            {
                id:             4,
                name:           'Ne ljuti se covece',
                description:    'Klasicna drustvena igra za dva do cetiri igraca sa drvenim figurama.',
                type:           'Drustvena igra',
                minAge:         5,
                targetGroup:    'a',
                manufacturedAt: '2024-11-30',
                price:          990,
                image:          'https://placehold.co/400x300?text=Igra',
                reviews: []
            },
            {
                id:             5,
                name:           'Interaktivni globus Putnik',
                description:    'Globus sa zvucnim opisima drzava, zastava i glavnih gradova na srpskom jeziku.',
                type:           'Edukativna igracka',
                minAge:         6,
                targetGroup:    'a',
                manufacturedAt: '2025-02-17',
                price:          4590,
                image:          'https://placehold.co/400x300?text=Globus',
                reviews: [
                    {
                        author:    'Nina Nikolic',
                        rating:    5,
                        comment:   'Zvucni opisi su jasni, koristimo ga i za domaci iz prirode i drustva.',
                        createdAt: '2025-06-25'
                    }
                ]
            },
            {
                id:             6,
                name:           'Drveni voz sa sinama',
                description:    'Set voza sa 24 dela sina i tri vagona od bukovog drveta.',
                type:           'Vozilo',
                minAge:         3,
                targetGroup:    'a',
                manufacturedAt: '2025-04-03',
                price:          4290,
                image:          'https://placehold.co/400x300?text=Voz',
                reviews: []
            },
            {
                id:             7,
                name:           'Slagalica mapa sveta',
                description:    'Slagalica od 200 delova sa mapom sveta, drzave i kontinenti kroz igru.',
                type:           'Slagalica',
                minAge:         7,
                targetGroup:    'a',
                manufacturedAt: '2025-01-09',
                price:          1590,
                image:          'https://placehold.co/400x300?text=Slagalica',
                reviews: [
                    {
                        author:    'Ivana Bolic',
                        rating:    4,
                        comment:   'Zahtevna je za sedmogodisnjaka, ali delovi su lepo uradjeni.',
                        createdAt: '2025-07-30'
                    }
                ]
            },
            {
                id:             8,
                name:           'Plisani zeka Lola',
                description:    'Plisani zeka od 30 cm, moze da se pere u masini za ves.',
                type:           'Figura',
                minAge:         1,
                targetGroup:    'g',
                manufacturedAt: '2025-02-28',
                price:          1290,
                image:          'https://placehold.co/400x300?text=Zeka',
                reviews: []
            },
            {
                id:             9,
                name:           'Zivotinjsko carstvo',
                description:    'Tvrde strane sa ilustracijama i kratkim opisima 40 zivotinja.',
                type:           'Slikovnica',
                minAge:         2,
                targetGroup:    'a',
                manufacturedAt: '2024-10-12',
                price:          890,
                image:          'https://placehold.co/400x300?text=Slikovnica',
                reviews: [
                    {
                        author:    'Jelena Todorovic',
                        rating:    5,
                        comment:   'Strane su debele, izdrzale su i grickanje i vlazne ruke.',
                        createdAt: '2025-04-04'
                    }
                ]
            },
            {
                id:             10,
                name:           'Set za crtanje i bojenje',
                description:    'Kofer sa 80 delova: bojice, flomasteri, pastele i blok za crtanje.',
                type:           'Kreativni set',
                minAge:         4,
                targetGroup:    'a',
                manufacturedAt: '2025-06-01',
                price:          2190,
                image:          'https://placehold.co/400x300?text=Crtanje',
                reviews: [
                    {
                        author:    'Sofija Petrovic',
                        rating:    5,
                        comment:   'Set dolazi sa neverovatnim sadrzajem , moze da se koristi za razlicite tehnike crtanja.',
                        createdAt: '2025-07-03'
                    }
                ]
            },
            {
                id:             11,
                name:           'Set za pletenje narukvica',
                description:    'Kofer sa koncima, perlama i alatom za izradu 20 razlicitih narukvica.',
                type:           'Kreativni set',
                minAge:         8,
                targetGroup:    'g',
                manufacturedAt: '2025-03-22',
                price:          1690,
                image:          'https://placehold.co/400x300?text=Narukvice',
                reviews: [
                    {
                        author:    'Anastasija Jovanovic',
                        rating:    3,
                        comment:   'Konci su lepi, ali uputstvo je previse sitno odstampano.',
                        createdAt: '2025-08-15'
                    }
                ]
            },
            {
                id:             12,
                name:           'Robot transformer Zed',
                description:    'Figura robota koja se transformise u vozilo, sa svetlosnim efektima.',
                type:           'Karakter',
                minAge:         6,
                targetGroup:    'b',
                manufacturedAt: '2025-05-27',
                price:          3190,
                image:          'https://placehold.co/400x300?text=Robot',
                reviews: []
            }
        ]
    }

    static getToyById(id: number): ToyModel {
        for (let t of this.getToys()) {
            if (t.id === id) return t
        }

        return this.getToys()[0]
    }

    static getTypes() {
        const set = new Set<string>()
        this.getToys().forEach(t => set.add(t.type))
        return Array.from(set)
    }

    static getFullTargetGroupText(tg: 'g' | 'b' | 'a') {
        if (tg === 'g') return 'Devojcice'
        if (tg === 'b') return 'Decaci'
        return 'Svi'
    }

    static getAverageRating(toy: ToyModel) {
        if (toy.reviews.length === 0) return 0
        let sum = 0
        for (let r of toy.reviews) {
            sum += r.rating
        }
        return Math.round(sum / toy.reviews.length * 10) / 10
    }
}