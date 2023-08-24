
const dataLt = {
    MUIFont: "'Roboto', sans-serif",
    MUIButtonBorder: {En: 4, Ru: 4, Lt: 7, Pl: 4},
    booklets:
             {title: "Download booklet",
             details: "Details", 
             transportingAndNearMachineEquipmentAndMachinesForWoodworking: 
                {product: "Transporting and near-machine equipment and machines for woodworking",
                path: "FerroMetals_Transporting_and_near_machine_equipment_and_machines_for_woodworking_Equipment_for_waste_processing_EN.pdf", 
                title: "FerroMetals_Transporting_and_near_machine_equipment_and_machines_for_woodworking_Equipment_for_waste_processing_EN.pdf"
             },
             equipmentForWasteProcessing: 
                {product: "Equipment for waste processing",
                path: "FerroMetals_Transporting_and_near_machine_equipment_and_machines_for_woodworking_Equipment_for_waste_processing_EN.pdf", 
                title: "FerroMetals_Transporting_and_near_machine_equipment_and_machines_for_woodworking_Equipment_for_waste_processing_EN.pdf"
             },
             roundWoodAccountingScanner: 
                {product: "Apvaliosios medienos apskaitos skaitytuvas",
                path: "FerroMetals_Round_wood_accounting_scanner_LT.pdf", 
                title: "FerroMetals_Round_wood_accounting_scanner_LT.pdf"
             },
             polymerPaintingLines: 
                {product: "Polimerinės dažymo linijos",
                path: "FerroMetals_Polymer_painting_lines_LT.pdf", 
                title: "FerroMetals_Polymer_painting_lines_LT.pdf"
             },
             palletEquipment: 
                {product: "Pallet equipment",
                path: "FerroMetals_Polymer_painting_lines_EN.pdf", 
                title: "FerroMetals_Polymer_painting_lines_EN.pdf"
             }
        },
    header: 
            {logo: "HERE IS COMPANY'S LOGO", 
            phoneNumber: "+37066830515", 
            email: "info@ferrometals.eu", 
            callback: 
                    {text: "Callback", 
                    header: "CALLBACK", 
                    message: "We will contact you shortly!", 
                    nameText: "Name", 
                    phoneText: "Phone number", 
                    buttonText: "SUBMIT", 
                    dataMessage: "The data will only be used to contact you!"} 
            },
    menuPaths: 
            {home: "/", 
            about: "/about", 
            catalog: "/catalog", 
            products: "/products", 
            transportingAndNearMachineEquipmentAndMachinesForWoodworking: 
            "/products/transporting_and_near_machine_equipment_and_machines_for_woodworking", 
            equipmentForWasteProcessing: "/products/equipment_for_waste_processing", 
            roundWoodAccountingScanner: "/products/round_wood_accounting_scanner",
            polymerPaintingLines: "/products/polymer_painting_lines",
            palletEquipment: "/products/pallet_equipment",
            gallery: "/gallery", 
            photo: "/gallery/photo", 
            video: "/gallery/video", 
            contacts: "/contacts", 
            privacypolicy: "/privacypolicy", 
            address: "/address", 
            error: "*"},
    menuItems: 
            {home: "Pradinis", 
            about: "Apie įmonę", 
            catalog: "Katalogas", 
            products: "Products", 
            transportingAndNearMachineEquipmentAndMachinesForWoodworking: 
            "Transporting and near-machine equipment and machines for woodworking",
            equipmentForWasteProcessing: "Equipment for waste processing", 
            roundWoodAccountingScanner: "Apvaliosios medienos apskaitos skaitytuvas",
            polymerPaintingLines: "Polimerinės dažymo linijos",
            palletEquipment: "Pallet equipment",
            gallery: "Galerija", 
            photo: "Foto", 
            video: "Video", 
            contacts: "Kontaktai"},
    home: 
        {firstPage: 
                    {name: "Ferrometals", 
                    description: "Design and manufacture of non-standart technological equipment for various industries", 
                    button: "Get consultation", 
                    link: "Catalog of projects", 
                    info: ["Woodworking lines;", "Transportation equipment and machines;",  
                        "Complex mechanization and automatization;", "Polimerinės dažymo linijos."]
                    },
        },
    about: 
          {mainText: 
                    [`The main activity of UAB FerroMetals is the integrated mechanization and automation of technological 
                    processes in woodworking and other industries in order to increase productivity, as well as improve 
                    the quality of products and the depth of raw materials processing, increase the reliability level and 
                    service life of production equipment.`,
                    `Our company performs a full range of works, including the development of a production line technological 
                    project, taking into account the individual requirements of the customer, the design and manufacture of 
                    process equipment, the manufacture of electronic control systems, installation and commissioning of 
                    equipment, as well as comprehensive service support for production.`,
                    `With our own production facilities and strong engineering service, our company manufactures:`,
                    `Our company provides services for the restoration repair of hinged joints of large-sized assemblies using 
                    a surfacing and boring complex with a visit to the customer's site.`],
          listItems: 
                    [`transporting, near-machine equipment and machines for woodworking - belt, scraper, chain conveyors, roller 
                    tables, storage decks, piece-by-piece log supply separators, edging devices, cross-cutting machines, automatic 
                    slot milling machines;`,
                    `equipment for waste processing: chippers and crushers, briquette presses, complex pellet and briquette lines;`,
                    `non-standard technological equipment for various industries;`,
                    `spare and wear parts of technological equipment;`, 
                    `parts according to the existing analogue with reverse design method.`],
          pictures: 
                    ['picture_about.png', 'picture_about2.jpg', 'picture_about3.jpg'],
          photos: [
                  ['photo_about.jpg', 'photo_about2.jpg', 'photo_about3.jpg'], 
                  ['photo_about4.jpg', 'photo_about5.jpg', 'photo_about6.jpg'], 
                  ['photo_about7.jpg', 'photo_about8.jpg', 'photo_about9.jpg']],
          altText: "Equipment",
          }, 
    products: {title: "Products"},
    transportingAndNearMachineEquipmentAndMachinesForWoodworking:
                {mainHeader: "Transporting and near-machine equipment and machines for woodworking",
                pictures: 
                        [{idGlobal: 0, 
                        header: 'Trestle with uncoupler', 
                        picture: 'trestle_with_uncoupler.png', 
                        captionText: 'Trestle with uncoupler',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Trestle capacity, m.cub.',
                                parameterValue: '15 - 50'},
                                {id: 1,
                                parameterName: 'Number of traction branches, pcs',
                                parameterValue: '3, 4'},
                                {id: 2,
                                parameterName: 'Length of the working part, m',
                                parameterValue: '6 - 12'},
                                {id: 3,
                                parameterName: 'Timber diameter, mm',
                                parameterValue: '120 - 500'},
                                {id: 4,
                                parameterName: 'Lumber length, m',
                                parameterValue: '2.5 - 6.5'},
                                {id: 5,
                                parameterName: 'Trestle drive power, kW',
                                parameterValue: '5.5 - 15'},
                                {id: 6,
                                parameterName: 'Disconnector drive power, kW',
                                parameterValue: '3 - 4'},
                                {id: 7,
                                parameterName: 'Type of uncoupler',
                                parameterValue: 'chain'},
                                {id: 8,
                                parameterName: 'Speed of log delivery, pcs/min',
                                parameterValue: '5'}]
                        },
                        {idGlobal: 1, 
                        header: 'Stepfeeder', 
                        picture: 'stepfeeder.png', 
                        captionText: 'Stepfeeder',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Trestle capacity, m.cub.',
                                parameterValue: '15 - 50'},
                                {id: 1,
                                parameterName: 'Number of traction branches, pcs',
                                parameterValue: '3, 4'},
                                {id: 2,
                                parameterName: 'Length of the working part, m',
                                parameterValue: '6 - 12'},
                                {id: 3,
                                parameterName: 'Timber diameter, mm',
                                parameterValue: '120 - 500'},
                                {id: 4,
                                parameterName: 'Lumber length, m',
                                parameterValue: '2.5 - 6.5'},
                                {id: 5,
                                parameterName: 'Trestle drive power, kW',
                                parameterValue: '5.5 - 15'},
                                {id: 6,
                                parameterName: 'Number of steps, pcs',
                                parameterValue: '5'},
                                {id: 7,
                                parameterName: 'Log diameter, mm',
                                parameterValue: '100 - 500'},
                                {id: 8,
                                parameterName: 'Log length, m',
                                parameterValue: '4 - 6.5'},
                                {id: 9,
                                parameterName: 'Log feeding speed up to, pcs/min',
                                parameterValue: '20'},
                                {id: 10,
                                parameterName: 'Drive type',
                                parameterValue: 'hydraulic'},
                                {id: 11,
                                parameterName: 'Drive power of the hydraulic station, kW',
                                parameterValue: '11'},
                                {id: 12,
                                parameterName: 'Power supply, V / Hz',
                                parameterValue: '380 / 50'}]
                        },
                        {idGlobal: 2, 
                        header: 'Overhead canter', 
                        picture: 'overhead_canter.png', 
                        captionText: 'Overhead canter',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Maximum length of logs, m',
                                parameterValue: '6.5'},
                                {id: 1,
                                parameterName: 'Maximum diameter of logs, mm',
                                parameterValue: '450'},
                                {id: 2,
                                parameterName: 'Traction body',
                                parameterValue: 'roller chain 16V with attachments'},
                                {id: 3,
                                parameterName: 'Total power, kW',
                                parameterValue: '5'}]
                        },
                        {idGlobal: 3, 
                        header: 'Timber extraction machine', 
                        picture: 'timber_extraction_machine.png', 
                        captionText: 'Timber extraction machine',
                        parameters: 
                                [{id: 0,
                                parameterName: 'The device is designed to extract timber from the general flow of lumber for feeding to a separate trimming',
                                parameterValue: ''},
                                {id: 1,
                                parameterName: 'The maximum size of the board, mm',
                                parameterValue: '200 x 200'},
                                {id: 2,
                                parameterName: 'Board length, mm',
                                parameterValue: '2500 - 6500'},
                                {id: 3,
                                parameterName: 'Length of the outfeed cross conveyor, mm',
                                parameterValue: '2000 - 6000'},
                                {id: 4,
                                parameterName: 'Outfeed conveyor power, kW',
                                parameterValue: '1.1 - 3'},
                                {id: 5,
                                parameterName: 'Device drive',
                                parameterValue: 'pneumatic'},
                                {id: 6,
                                parameterName: 'Nominal pressure in the pneumatic line, bar',
                                parameterValue: '4'}]
                        },
                        {idGlobal: 4, 
                        header: 'Measuring and transportation system', 
                        picture: 'measuring_and_transportation_system.png', 
                        captionText: 'Measuring and transportation system',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Work cycle',
                                parameterValue: 'automatic'},
                                {id: 1,
                                parameterName: 'Measurement type',
                                parameterValue: 'optical scanner'},
                                {id: 2,
                                parameterName: 'Measured product dimensions up to, mm',
                                parameterValue: '600 x 300 x 3500'},
                                {id: 3,
                                parameterName: 'Mass of the measured product up to, kg',
                                parameterValue: '40'},
                                {id: 4,
                                parameterName: 'Ejector type',
                                parameterValue: 'pneumatic'},
                                {id: 5,
                                parameterName: 'Conveying speed, m/s',
                                parameterValue: '0 - 0.3 (adjustable)'},
                                {id: 6,
                                parameterName: 'Total power, kW',
                                parameterValue: '3'}]
                        },
                        {idGlobal: 5, 
                        header: 'Chip and bark conveyor',
                        picture: 'chip_and_bark_conveyor.png',
                        captionText: 'Chip and bark conveyor',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Productivity, m.cub./h',
                                parameterValue: '25 - 50'},
                                {id: 1,
                                parameterName: 'Power, kW',
                                parameterValue: '5 - 15'},
                                {id: 2,
                                parameterName: 'Transportation length up to, m',
                                parameterValue: '50'},
                                {id: 3,
                                parameterName: 'Lifting height up to, m',
                                parameterValue: '8'},
                                {id: 4,
                                parameterName: 'Angle of elevation up to, degrees',
                                parameterValue: '55'}]
                        },
                        {idGlobal: 6, 
                        header: 'The automatic centering device', 
                        picture: 'the_automatic_centering_device.png',
                        captionText: 'The automatic centering device',
                        parameters: 
                                [{id: 0,
                                parameterName: 'It is designed to receive the prism from the headrig.',
                                parameterValue: ''},
                                {id: 1,
                                parameterName: 'Automatically centers the prism and feeds into the multi-saw rig',
                                parameterValue: ''}]
                        },
                        {idGlobal: 7, 
                        header: 'Rollway drive with screw discharge', 
                        picture: 'rollway_drive_with_screw_discharge.png',
                        captionText: 'Rollway drive with screw discharge',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Roller working surface width, mm',
                                parameterValue: '700'},
                                {id: 1,
                                parameterName: 'Roller pitch, mm',
                                parameterValue: '630'},
                                {id: 2,
                                parameterName: 'The length of the working area of the rollway, mm',
                                parameterValue: '7000'},
                                {id: 3,
                                parameterName: 'Drive power, kW',
                                parameterValue: '2.2'}]
                        },
                        {idGlobal: 8, 
                        header: 'The belt conveyor',
                        picture: 'the_belt_conveyor.png',
                        captionText: 'The belt conveyor',
                        parameters: 
                                [{id: 0,
                                parameterName: 'It is designed for removal from machines and transportation of various bulk materials, including sawdust and wood chips',
                                parameterValue: ''}]
                        },
                        {idGlobal: 9, 
                        header: 'Machine for cross section milling SCMM125', 
                        picture: 'machine_for_cross_section_milling_SCMM125.png', 
                        captionText: 'Machine for cross section milling SCMM125',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Board width, mm',
                                parameterValue: '60 - 100'},
                                {id: 1,
                                parameterName: 'Board thickness up to, mm',
                                parameterValue: '40'},
                                {id: 2,
                                parameterName: 'Board length, mm',
                                parameterValue: '1000 - 1300'},
                                {id: 3,
                                parameterName: 'Width of side grooves, mm',
                                parameterValue: '100'},
                                {id: 4,
                                parameterName: 'Width of the central groove, mm',
                                parameterValue: '102'},
                                {id: 5,
                                parameterName: 'Transverse stroke of separate adjustment for the position of saw units, mm',
                                parameterValue: '250'},
                                {id: 6,
                                parameterName: 'Vertical stroke of synchronous adjustment for the position of saw units, mm',
                                parameterValue: '100'},
                                {id: 7,
                                parameterName: 'Groove depth, mm',
                                parameterValue: '17 (adjustable)'},
                                {id: 8,
                                parameterName: 'Number of saw units, pcs',
                                parameterValue: '3'},
                                {id: 9,
                                parameterName: 'Loading method of boards',
                                parameterValue: 'cassette feed'},
                                {id: 10,
                                parameterName: 'Productivity not less than, pcs/min',
                                parameterValue: '10'},
                                {id: 11,
                                parameterName: 'Type of cutters',
                                parameterValue: 'a package of slotted cylindrical cutters (5 pcs in each node)'},
                                {id: 12,
                                parameterName: 'Total power, kW',
                                parameterValue: '8'},
                                {id: 13,
                                parameterName: 'Board feed speed, m/min',
                                parameterValue: '0 - 40 (adjustable)'},
                                {id: 14,
                                parameterName: 'Power supply, V / Hz',
                                parameterValue: '380 / 50'}]
                        },
                        {idGlobal: 10, 
                        header: 'Machine for straight milling SLMM125', 
                        picture: 'machine_for_straight_milling_SLMM125.png', 
                        captionText: 'Machine for straight milling SLMM125',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Board width, mm',
                                parameterValue: '60 - 80'},
                                {id: 1,
                                parameterName: 'Board thickness up to, mm',
                                parameterValue: '90'},
                                {id: 2,
                                parameterName: 'Board length, mm',
                                parameterValue: '700 - 1200'},
                                {id: 3,
                                parameterName: 'Number of saw units, pcs',
                                parameterValue: '1'},
                                {id: 4,
                                parameterName: 'Cutter rotation axis',
                                parameterValue: 'horizontal'},
                                {id: 5,
                                parameterName: 'Saw unit vertical adjustment (groove depth)',
                                parameterValue: ''},
                                {id: 6,
                                parameterName: 'Motorized width adjustment between guides (screw drive with trapezoidal thread)',
                                parameterValue: ''},
                                {id: 7,
                                parameterName: 'Vertical clamping of boards',
                                parameterValue: 'saw unit (anti-friction overlay)'},
                                {id: 8,
                                parameterName: 'Loading method of boards',
                                parameterValue: 'cassette feed'},
                                {id: 9,
                                parameterName: 'Unloading method of boards',
                                parameterValue: 'receiving tray'},
                                {id: 10,
                                parameterName: 'Tray capacity, boards',
                                parameterValue: '5'},
                                {id: 11,
                                parameterName: 'Receiving tray bottom, mm',
                                parameterValue: '800'},
                                {id: 12,
                                parameterName: 'Type of cutter',
                                parameterValue: 'cylindrical groove cutter'},
                                {id: 13,
                                parameterName: 'Groove width',
                                parameterValue: 'set by the cutter'},
                                {id: 14,
                                parameterName: 'Milling unit power, kW',
                                parameterValue: '2.2'},
                                {id: 15,
                                parameterName: 'Boards feed drive power, kW',
                                parameterValue: '1.1'},
                                {id: 16,
                                parameterName: 'Way of feeding boards',
                                parameterValue: 'chain conveyor with attachments'},
                                {id: 17,
                                parameterName: 'Boards feed speed, m/min',
                                parameterValue: '0 - 40 (adjustable)'},
                                {id: 18,
                                parameterName: 'Power supply, V / Hz',
                                parameterValue: '380 / 50'}]
                        },
                        {idGlobal: 11, 
                        header: 'Boards feeder', 
                        picture: 'cross-cutting_machine_TBM4003.png', //нет рисунка
                        captionText: 'Boards feeder',
                        parameters: 
                                [{id: 0,
                                parameterName: 'The length of the boards, m',
                                parameterValue: '2 - 6.5'},
                                {id: 1,
                                parameterName: 'Unloading height',
                                parameterValue: 'on request'},
                                {id: 2,
                                parameterName: 'Total power, kW',
                                parameterValue: '3.5'},
                                {id: 3,
                                parameterName: 'Number of branches up to, pcs',
                                parameterValue: '12'},
                                {id: 4,
                                parameterName: 'Feed rate up to, m/min',
                                parameterValue: '40 (adjustable)'}]
                        },
                        {idGlobal: 12, 
                        header: 'Cross-cutting machine TBM4003', 
                        picture: 'cross-cutting_machine_TBM4003.png',
                        captionText: 'Cross-cutting machine TBM4003',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Number of saw units, pcs',
                                parameterValue: '2 - 6'},
                                {id: 1,
                                parameterName: 'Saw diameter, mm',
                                parameterValue: '400'},
                                {id: 2,
                                parameterName: 'Motor power of saw units, kW',
                                parameterValue: '3'},
                                {id: 3,
                                parameterName: 'Trimming length range, mm',
                                parameterValue: '6000 - 570'}, //????????? 6000 – 570
                                {id: 4,
                                parameterName: 'The maximum thickness of the workpiece, mm',
                                parameterValue: '90'},
                                {id: 4,
                                parameterName: 'Feed rate, m/min',
                                parameterValue: '0 - 25'}]
                        },       
                        {idGlobal: 13, 
                        header: 'Pallet board stacker BS816', 
                        picture: 'pallet_board_stacker_BS816.png',
                        captionText: 'Pallet board stacker BS816',
                        parameters: 
                                [{id: 0,
                                parameterName: 'The automatic board stacker is designed for stacking softwood and hardwood lumber in transport packs or in packs for drying.',
                                parameterValue: ''},
                                {id: 1,
                                parameterName: 'The stacker is reconfigured for different board sizes, also the number of layers and spacers can be set',
                                parameterValue: ''},
                                {id: 2,
                                parameterName: 'Board length, mm',
                                parameterValue: '800 - 1300'},
                                {id: 3,
                                parameterName: 'Board width, mm',
                                parameterValue: '50 - 200'},
                                {id: 4,
                                parameterName: 'Board thickness, mm',
                                parameterValue: '12 - 100'},
                                {id: 5,
                                parameterName: 'Productivity, layers per min',
                                parameterValue: '6'},
                                {id: 6,
                                parameterName: 'Maximum stack dimensions, mm',
                                parameterValue: '1300 x 1300 x 1600'},
                                {id: 7,
                                parameterName: 'Maximum spacer width, mm',
                                parameterValue: '150'},
                                {id: 8,
                                parameterName: 'Total power, kW',
                                parameterValue: '9'}]
                        },
                        {idGlobal: 14, 
                        header: 'Lumber antiseptic vat (bath) WDT6000',
                        picture: 'lumber_antiseptic_vat_(bath)_WDT6000.png', 
                        captionText: 'Lumber antiseptic vat (bath) WDT6000',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Bath internal dimensions:',
                                parameterValue: ''},
                                {id: 1,
                                parameterName: '- width, m',
                                parameterValue: '1.5'},
                                {id: 2,
                                parameterName: '- height, m',
                                parameterValue: '1.5'},
                                {id: 3,
                                parameterName: '- length, m',
                                parameterValue: '6.5'},
                                {id: 4,
                                parameterName: 'Length of the carrying platform for lumber stacks, m',
                                parameterValue: '6.0'},
                                {id: 5,
                                parameterName: 'Maximum dimensions of a lumber stack:',
                                parameterValue: ''},
                                {id: 6,
                                parameterName: '- width, m',
                                parameterValue: '1.2'},
                                {id: 7,
                                parameterName: '- height, m',
                                parameterValue: '1.2'},
                                {id: 8,
                                parameterName: '- length, m',
                                parameterValue: '6.3'},
                                {id: 9,
                                parameterName: 'Maximum total weight of lumber stacks placed on the platform, kg',
                                parameterValue: '6000'},
                        {id: 10,
                                parameterName: 'Total installed electric power, kW',
                                parameterValue: '5.5'},
                                {id: 11,
                                parameterName: 'Production according to individual requirements of the customer is possible',
                                parameterValue: ''}]
                        }
                        ]
                },
    equipmentForWasteProcessing:
                {mainHeader: "Equipment for waste processing",
                pictures: 
                        [{idGlobal: 0, 
                        header: 'Hammer crusher WHM2000', 
                        picture: 'hummer_crusher_WHM2000.png',
                        captionText: 'Hammer crusher WHM2000',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Productivity up to, t/h',
                                parameterValue: '2'},
                                {id: 1,
                                parameterName: 'Total power, kW',
                                parameterValue: '27'},
                                {id: 2,
                                parameterName: 'Number of hammers, pcs',
                                parameterValue: '105'},
                                {id: 3,
                                parameterName: 'Humidity of raw materials, no more than %',
                                parameterValue: '35'},
                                {id: 4,
                                parameterName: 'The size of the loading funnel, mm',
                                parameterValue: '400 x 400'},
                                {id: 5,
                                parameterName: 'Materials to grind',
                                parameterValue: 'chips, bark, shavings'},
                                {id: 6,
                                parameterName: 'Fraction at the entrance, mm',
                                parameterValue: 'up to 60 max'},
                                {id: 7,
                                parameterName: 'Fraction at the output, mm',
                                parameterValue: 'up to 3 max'}]
                        },
                        {idGlobal: 1, 
                        header: 'Chipper WCM60055', 
                        picture: 'chipper_WCM60055_front_side.png', 
                        captionText: 'Chipper WCM60055',
                        parameters: 
                                [{id: 0,
                                parameterName: 'The chipper is designed to produce fuel and technological chips from the processing of waste from timber processing enterprises (offcuts, trimmings)',
                                parameterValue: ''},
                                {id: 1,
                                parameterName: 'Number of knives, cutting / counter knife',
                                parameterValue: '2 / 1'},
                                {id: 2,
                                parameterName: 'Feeding speed up to, m/min',
                                parameterValue: '25'},
                                {id: 3,
                                parameterName: 'Productivity (at the entrance) up to, m.cub./h',
                                parameterValue: '20'},
                                {id: 4,
                                parameterName: 'Drum drive power, kW',
                                parameterValue: '55'},
                                {id: 5,
                                parameterName: 'Feed motor power, kW',
                                parameterValue: '2 x 2.2'},
                                {id: 6,
                                parameterName: 'Cutting drum diameter, mm',
                                parameterValue: '460'},
                                {id: 7,
                                parameterName: 'Number of revolutions of the cutting drum, rpm',
                                parameterValue: '600'},
                                {id: 8,
                                parameterName: 'Entrance window sizes, mm',
                                parameterValue: '550 x 220'},
                                {id: 9,
                                parameterName: 'Built-in feeding belt conveyor',
                                parameterValue: ''}]
                        },
                        {idGlobal: 2, 
                        header: 'Chipper WCM60055 (back side)', 
                        picture: 'chipper_WCM60055_back_side.png', 
                        captionText: 'Chipper WCM60055',
                        parameters: 
                                [{id: 0,
                                parameterName: '',
                                parameterValue: ''}]
                        }
                        ]
                },
    roundWoodAccountingScanner: 
                {mainHeader: "Apvaliosios medienos apskaitos skaitytuvas",
                mainPictures: 
                        [{idMain: 0, 
                        header: '', 
                        picture: 'round_wood_accounting_scanner.png',
                        captionText: 'Apvaliosios medienos apskaitos skaitytuvas'}
                        ],
                mainText: [`FerroMetals yra oficialus Falcon Scan atstovas Europos Sąjungoje`,
                `Falcon Scan SRW apvaliosios 
                medienos apskaitos skaitytuvas yra 
                skirtas veikti kaip automatinė rąsto 
                parametrų matavimo priemonė ir gali 
                būti naudojamas tiek savarankiškai, 
                tiek automatizuotų valdymo sistemų, 
                skirtų rūšiavimo ir skersinio pjovimo 
                linijoms, žaliavų apskaitos sistemoms 
                visose įmonės srityse, adaptyvių 
                medienos apdirbimo įrangos valdymo 
                sistemų sudėtyje. Atitinka GOST 
                52117-2003, GOST 2708-75`,
                `Liniuotės Emitter-Receiver poros sudaro 
                matavimo taikinį. Mikrovaldiklis kontroliuoja 
                emiterių įtraukimą tam tikra tvarka, dėl ko 
                matavimo vietoje susidaro labai tankus 
                spindulių tinklas. Jei matavimo diapazone nėra 
                rąsto, matuoklis dirba valdymo zonos 
                nuskaitymo režimu, ieškodamas rąsto. Tuo 
                metu, kai bet kuris objektas patenka į matavimo 
                tikslą, matuoklis persijungia į matavimo režimą. 
                Konvejeriui judant reguliariais intervalais 
                atliekami šie matavimai. Dėl to, kad kiekvienas 
                matavimas trunka labai trumpą laiką – kelias 
                milisekundes – tampa įmanoma išmatuoti rąstą, 
                pavyzdžiui, 6 metrų ilgio, 1 m/s konvejerio 
                greičiu daugiau nei 500 taškų`,
                `Montavimo ir paleidimo metu turite turėti stabilią prieigą prie interneto 
                (Wi-Fi arba LAN). Reikalingas kompiuteris su bent Win7 operacine sistema 
                ir su prieiga prie interneto; Personalo parengimas ir mokymas vykdomas 
                nuotoliniu būdu (internetu)`
                ],
                pictures: 
                        [{idGlobal: 0, 
                        header: '', 
                        picture: 'round_wood_accounting_scanner2.png',
                        captionText: 'Apvaliosios medienos apskaitos skaitytuvas',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Didžiausias išmatuojamas skersmuo, mm',
                                parameterValue: '780, 1150'},
                                {id: 1,
                                parameterName: 'Mažiausias išmatuojamas skersmuo, mm',
                                parameterValue: '60'},
                                {id: 2,
                                parameterName: 'Didžiausias atstumas tarp siųstuvo ir imtuvo, mm',
                                parameterValue: '1500'},
                                {id: 3,
                                parameterName: 'Skersmens matavimo tikslumas, mm',
                                parameterValue: '+- 1'},
                                {id: 4,
                                parameterName: 'Matavimų skaičius per sekundę',
                                parameterValue: '250'},
                                {id: 5,
                                parameterName: 'Ilgio matavimo paklaida, mm:',
                                parameterValue: ''},
                                {id: 6,
                                parameterName: '- 3 m/s greičiu',
                                parameterValue: '+-15'},
                                {id: 7,
                                parameterName: '- 0.5 m/s greičiu',
                                parameterValue: '+-1.5'},
                                {id: 8,
                                parameterName: 'Galimybė montuoti nenutraukiant rąstų tiekimo grandinės',
                                parameterValue: 'taip'},
                                {id: 9,
                                parameterName: 'Maksimalus rąsto ilgis',
                                parameterValue: 'neribota'},
                                {id: 10,
                                parameterName: 'Minimalus rąsto ilgis, mm',
                                parameterValue: '100'},
                                {id: 11,
                                parameterName: 'Maitinimo įtampa (AC) , V',
                                parameterValue: '100 - 240'},
                                {id: 12,
                                parameterName: 'Energijos sąnaudos, W',
                                parameterValue: '15'},
                                {id: 13,
                                parameterName: 'Valdymo sąsaja',
                                parameterValue: 'Jutiklinis ekranas, 7 colių'},
                                {id: 14,
                                parameterName: 'Kalbos palaikymas',
                                parameterValue: 'Anglų, rusų'},
                                {id: 15,
                                parameterName: 'Įkėlimo protokolų palaikymas:',
                                parameterValue: ''},
                                {id: 16,
                                parameterName: '- susėsti vietiniai',
                                parameterValue: 'WIFI, Ethernet (kabelis)'},
                                {id: 17,
                                parameterName: '- internetas',
                                parameterValue: 'WIFI, Ethernet (kabelis)'},
                                {id: 18,
                                parameterName: 'Parametrų įkėlimas į lentelę (kiekvienam rąstui): skersmuo, ilgis, apimtis, data/laikas, žurnalo numeris, darbuotojas',
                                parameterValue: 'SQL (iš SQL galima iškrauti į EXCEL)'},
                                {id: 19,
                                parameterName: 'Nuotolinis skaitytuvo programinės įrangos palaikymas, sąranka ir atnaujinimas',
                                parameterValue: 'taip'},
                                {id: 20,
                                parameterName: 'Skaitytuvo vidinė atmintis, GB',
                                parameterValue: '32'},
                                {id: 21,
                                parameterName: 'Koderio skiriamoji geba, imp/ap',
                                parameterValue: '4000'},
                                {id: 22,
                                parameterName: 'Korpuso medžiaga:',
                                parameterValue: ''},
                                {id: 23,
                                parameterName: '- prie jutiklių',
                                parameterValue: 'aliuminio'},
                                {id: 24,
                                parameterName: '- prie modulio su valdymo ekranu',
                                parameterValue: 'plastikas'},
                                {id: 25,
                                parameterName: 'Prievadai prijungimui',
                                parameterValue: 'USB, RJ45, GX12, GX16, GX20'},
                                {id: 26,
                                parameterName: 'Darbo temperatūros diapazonas, С',
                                parameterValue: '-40 - +50'}]
                        }
                        ]
                },
    polymerPaintingLines: 
                {mainHeader: "Polimerinės dažymo linijos",
                mainPicture: 
                        {picture: 'polymer_painting_lines.png',
                        captionText: 'Polimerinės dažymo linijos'},
                decorationPictures:
                        [{picture: 'polymer_painting_lines2.png',
                        captionText: 'Polimerinės dažymo linijos'},
                        {picture: 'polymer_painting_lines3.png',
                        captionText: 'Polimerinės dažymo linijos'},
                        {picture: 'polymer_painting_lines4.png',
                        captionText: 'Polimerinės dažymo linijos'},
                        {picture: 'polymer_painting_lines5.png',
                        captionText: 'Polimerinės dažymo linijos'}
                        ],
                mainText: `Linijos gali būti žiedinės ir pusžiedinės konstrukcijos. Žiedinėjė linijoje ruošiniai gali judėti per kamerą 
                – tokiu būdu dėl pastovių pakrovimo/iškrovimo taškų ir judėjimo krypčių užtikrinama geresnė dažytų ir nedažytų detalių 
                logistika, todėl žiedinės linijos naudojamas didelės apimties nepertraukiamai gamybai. Jeigu reikalaujama, kad linija 
                būtų kuo kompaktiškesnė, siūloma pusžiedinė konstrukcija, kai kameros yra aklinos, o detalių judėjimą tarp kamerų 
                užtikrina transportavimo sistema.`,
                internalTitleText: `Liniją sudaro:`,
                internalBlocksText: 
                                [{id: 0,
                                header: `1. Polimerizacijos kamera su automatizuota valdymo sistema.`,
                                subHeader: `Kameros konstrukcija:`,
                                blockText:
                                        [`kameros korpusas su šilumos izoliacija, viduje padengtas cinkuota plieno skarda;`,
                                        `termoblokas su nerūdijančiojo plieno briaunuotais kaitinimo elementais ir priverstinės oro 
                                        cirkuliacijos sistema su specialiu karščiui atspariu ventiliatoriumi;`,
                                        `vidinis oro kanalo paviršius padengtas nerūdijančiuoju plienu, kad nesikauptų apnašos ir 
                                        vėliau nebūtų užteršti dengti gaminiai;`,
                                        `valdymo blokas su jutiklinio ekrano skydeliu ir vartotojui patogia grafine sąsaja, skirtas 
                                        visiškai automatiniam valdymui (šildymas - išlaikymas - šildymo nutraukimas - priverstinis 
                                        išjungtų kaitinimo elementų vėdinimas (aušinimas));`,
                                        `tvirti vyriai ir kameros rėmas, kad durelės nesusilankstytų ir nepažeistų korpuso 
                                        geometrijos;`,
                                        `paprasta elektros grandinė, kurioje naudojami standartiniai komponentai, užtikrina paprastesnę 
                                        priežiūrą;`,
                                        `šildymo elementai yra termoblokų oro kanaluose, esančiuose už kameros vidinio tarpo ribų, todėl 
                                        prireikus gaminius, kurių negalima pakabinti, galima padėti ant grindų ant specialių atramų;`,
                                        `priverstinės oro cirkuliacijos sistema, užtikrinanti tolygų oro maišymąsi ir temperatūros 
                                        stabilizavimą 5ᵒC ribose visame kameros tūryje;`,
                                        `ištraukiamasis gaubtas, skirtas orui, išmetamam ciklo pabaigoje atidarant kameros duris, 
                                        išsiurbti.`]
                                },
                                {id: 1,
                                header: `2. Elektrostatinio miltelių purškimo kamera su didelio našumo rankiniu miltelių purškimo 
                                įrenginiu ir rekuperacine sistema nepanaudotiems milteliams surinkti.`,
                                subHeader: `Kameros konstrukcija:`,
                                blockText:
                                        [`numatytas operatoriaus buvimas kameros viduje dažymo proceso metu;`,
                                        `kameros sienelės pagamintos iš skaidraus dielektrinio polimero;`,
                                        `grindys dengtos cinkuota skarda, kad būtų lengva pašalinti nusėdusių miltelių likučius;`,
                                        `LED darbo zonos apšvietimas;`,
                                        `varstomos arba stumdomos durys (pasirinktinai);`,
                                        `rekuperacijos sistema, skirta orui iš purškimo kameros ištraukti, filtruoti, polimero 
                                        milteliams, nenusėdusiems ant dažomų detalių paviršiaus, surinkti į specialią talpyklą ir 
                                        grąžinti į technologinį ciklą. Taikomi du valymo etapai: pirmajame naudojamas ciklonas, 
                                        antrajame – poliesterio kasetinis filtras. Išvalymo laipsnis – iki 99,9%.`]
                                },
                                {id: 2,
                                header: `3. Transportavimo sistema, pagrįsta viršutiniais pakabinamaisiais daugiasiūliais bėgiais ir 
                                ritininių pakabinamųjų vežimėlių komplektu, skirtu detalėms užtvirtinti.`,
                                subHeader: `Kameros konstrukcija:`,
                                blockText:
                                        [`didelė laikomoji galia ir tikslus sujungimas, nes kreipiamiesiems bėgeliams naudojamas 
                                        didelio atsparumo uždaras profilis - vieno ruošinio svoris iki 500 kg;`,
                                        `ruošinių vežimėlius lengva judinti rankiniu būdu dėl šarnyrinių pakabų ant antifrikcinių 
                                        guolių, suteptu karščiui atspariu grafito tepalu;`,
                                        `kad ant pakabų paviršiaus nesikauptų milteliai, kelias per miltelių purškimo kamerą yra oro 
                                        šliuze;`,
                                        `modulinė išardoma konstrukcija užtikriną lengvą montavimą bei leidžianti prireikus keisti 
                                        arba papildyti konstrukciją, kad būtų galima prisitaikyti prie ruošinių matmenų ar proceso 
                                        ciklo pokyčių.`]
                                },
                                {id: 3,
                                header: `Papildomos opcijos:`,
                                subHeader: ``,
                                blockText:
                                        [`Mechanizuota transportavimo sistema, pagrįsta elektra varomu žiediniu pakabinamu kelių eilių 
                                        konvejeriu.`,
                                        `Priverstinis ruošinių aušinimas oru su atskira transportavimo linija ir ištraukiamąja 
                                        ventiliacija.`]
                                }
                                ],
                pictures: 
                        [{idGlobal: 0, 
                        header: '', 
                        picture: 'polymer_painting_lines6.png',
                        captionText: 'Polimerinės dažymo linijos',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Bazinio polimerų dažymo linijos komplekto sudėtis.',
                                parameterValue: ''},
                                {id: 1,
                                parameterName: 'Įrangos pavadinimas:',
                                parameterValue: ''},
                                {id: 2,
                                parameterName: '1. Elektrostatinio miltelinio dažymo kamera:',
                                parameterValue: ''},
                                {id: 3,
                                parameterName: 'Kameros tipas',
                                parameterValue: 'ištisinė'},
                                {id: 4,
                                parameterName: 'Susiejimas su transportavimo sistema',
                                parameterValue: 'iš viršaus'},
                                {id: 5,
                                parameterName: 'Maitinimo šaltinio parametrai, V / Hz',
                                parameterValue: '380 / 50'},
                                {id: 6,
                                parameterName: 'Vidiniai kameros matmenys, mm',
                                parameterValue: '8000 х 2000 х 3000'},
                                {id: 7,
                                parameterName: 'Miltelių talpyklos talpa, kg',
                                parameterValue: '40'},
                                {id: 8,
                                parameterName: 'Bendra galia, kW',
                                parameterValue: '8'},
                                {id: 9,
                                parameterName: `Komplektuojama elektrostatinio miltelių purškimo įtaisu ir švaraus oro tiekimo į 
                                operatoriaus šalmą sistema`,
                                parameterValue: ''},
                                {id: 10,
                                parameterName: '2. Transportavimo sistema:',
                                parameterValue: ''},
                                {id: 11,
                                parameterName: 'Konvejerio tipas',
                                parameterValue: 'kilpinis pakabinamas grįžtamasis'},
                                {id: 12,
                                parameterName: 'Traukos elemento tipas',
                                parameterValue: 'traukos grandinė su traversais'},
                                {id: 13,
                                parameterName: 'Linijos tipas',
                                parameterValue: 'važiuojanti I formos sija'},
                                {id: 14,
                                parameterName: 'Atstumas tarp užkabinimo traversų, mm',
                                parameterValue: '400'},
                                {id: 15,
                                parameterName: 'Bendroji keliamoji galia, kg',
                                parameterValue: '1500'},
                                {id: 16,
                                parameterName: 'Pavaros galia, kW',
                                parameterValue: '3'},
                                {id: 17,
                                parameterName: 'Judėjimo greitis, m/s',
                                parameterValue: '0 – 250'},
                                {id: 18,
                                parameterName: 'Linijos ilgis, m',
                                parameterValue: '35'},
                                {id: 19,
                                parameterName: '3. Polimerizacijos kamera:',
                                parameterValue: ''},
                                {id: 20,
                                parameterName: 'Kameros tipas',
                                parameterValue: 'ištisinė'},
                                {id: 21,
                                parameterName: 'Pririšimas prie transportavimo sistemos',
                                parameterValue: 'iš viršaus'},
                                {id: 22,
                                parameterName: 'Bendra kaitinimo elementų galia, kW',
                                parameterValue: '200'},
                                {id: 23,
                                parameterName: 'Veikimo režimas',
                                parameterValue: 'automatinis'},
                                {id: 24,
                                parameterName: 'Laikas iki perėjimo į darbinį režimą, esant maks. užkrovimo laikas, min',
                                parameterValue: '40'},
                                {id: 25,
                                parameterName: 'Aukščiausia kaitinimo temperatūra, С°',
                                parameterValue: '230'},
                                {id: 26,
                                parameterName: 'Maitinimo šaltinio parametrai, V / Hz',
                                parameterValue: '380 / 50'},
                                {id: 27,
                                parameterName: 'Šildymo elementų įtampa, V',
                                parameterValue: '220'},
                                {id: 28,
                                parameterName: 'Termoblokų skaičius',
                                parameterValue: '4'},
                                {id: 29,
                                parameterName: 'Vidiniai kameros matmenys, mm',
                                parameterValue: '8000 х 3000 х 3000'}]
                        }
                        ]
                },  
    palletEquipment:
                {mainHeader: "Pallet equipment",
                pictures: 
                        [{idGlobal: 0, 
                        header: 'Semi-automatic wooden pallet assembly line', 
                        picture: 'semi_automatic_wooden_pallet_assembly_line.png', 
                        captionText: 'Semi-automatic wooden pallet assembly line',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Reconfigurable jig for assembling the following types of pallets:',
                                parameterValue: ''},
                                {id: 1,
                                parameterName: '',
                                parameterValue: '1200 х 800 х 145 (EUR)'},
                                {id: 2,
                                parameterName: '',
                                parameterValue: '1200 х 1000 х 145 (FIN)'},
                                {id: 3,
                                parameterName: '',
                                parameterValue: '1200 х 1200 х 145 (US)'},
                                {id: 4,
                                parameterName: 'Productivity, pcs/h',
                                parameterValue: '80'},
                                {id: 5,
                                parameterName: 'Total power, kW',
                                parameterValue: '12'},
                                {id: 6,
                                parameterName: 'Weight, kg',
                                parameterValue: '2500'},
                                {id: 7,
                                parameterName: 'Thermal markers for brand burning, pcs',
                                parameterValue: '6'},
                                {id: 8,
                                parameterName: 'Automatic assembly and stacking (with overturning) of finished pallets',
                                parameterValue: ''},
                                {id: 9,
                                parameterName: 'Manual stacking of blanks in the jig',
                                parameterValue: ''},
                                {id: 10,
                                parameterName: 'Trimming the corners of the pallet',
                                parameterValue: ''}]
                        },
                        {idGlobal: 1, 
                        header: 'Linear machine for cutting bosses (blocks) for a pallet', 
                        picture: 'linear_machine_for_cutting_bosses_(blocks)_for_a_pallet.png', 
                        captionText: 'Linear machine for cutting bosses (blocks) for a pallet',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Bar section maximum, mm',
                                parameterValue: '150 х 150'},
                                {id: 1,
                                parameterName: '(other options available upon request)',
                                parameterValue: ''},
                                {id: 2,
                                parameterName: 'Bar length maximum, mm',
                                parameterValue: '2000'},
                                {id: 3,
                                parameterName: 'Productivity, pcs/h',
                                parameterValue: '1'},
                                {id: 4,
                                parameterName: 'Saw drive power, kW',
                                parameterValue: '4'},
                                {id: 5,
                                parameterName: 'Workpiece feed drive power, kW',
                                parameterValue: '0.75'},
                                {id: 6,
                                parameterName: 'Workpiece clamp',
                                parameterValue: 'pneumatic'},
                                {id: 7,
                                parameterName: 'Nominal pressure in the pneumatic line, bar',
                                parameterValue: '5'},
                                {id: 8,
                                parameterName: 'The length of the cut is adjusted by moving the stop, which limits the stroke of the pneumatic cylinder of the mechanism for stepping the feed of the workpiece to the saw. This adjustment is made using a screw gear. By turning the handle, the operator can set any required size in the range of 50 - 170 mm. To control the size there is a scale with a division of 1 mm.',
                                parameterValue: ''},
                                {id: 9,
                                parameterName: 'The saw unit has a design that allows quick replacement of the saw. To replace the saw, it is necessary to open the upper casing (fixed in the open position with a pneumatic stop) and unscrew the spindle end nut.',
                                parameterValue: ''},
                                {id: 10,
                                parameterName: 'Thread direction ensures self-locking during spindle rotation',
                                parameterValue: ''}]
                        },
                        {idGlobal: 2, 
                        header: 'Machine for automatic burning of the brand on the boss', 
                        picture: 'machine_for_automatic_burning_of_the_brand_on_the_boss.png', 
                        captionText: 'Machine for automatic burning of the brand on the boss',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Thermal marker power, W',
                                parameterValue: '1000'},
                                {id: 1,
                                parameterName: 'Productivity, pcs/h',
                                parameterValue: '30'},
                                {id: 2,
                                parameterName: 'Workpiece feed drive',
                                parameterValue: 'pneumatic'},
                                {id: 3,
                                parameterName: 'Nominal pressure, bar',
                                parameterValue: '5'}]
                        },
                        {idGlobal: 3, 
                        header: 'Linear machine for cutting wooden bosses (blocks) for pallets', 
                        picture: 'linear_machine_for_cutting_wooden_bosses_(blocks)_for_pallets.png', 
                        captionText: 'Linear machine for cutting wooden bosses (blocks) for pallets',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Bar section maximum, mm',
                                parameterValue: '150 х 150'},
                                {id: 1,
                                parameterName: 'Bar length maximum, mm',
                                parameterValue: '2000'},
                                {id: 2,
                                parameterName: 'Productivity, pcs/h',
                                parameterValue: '1'},
                                {id: 3,
                                parameterName: 'Saw drive power, kW',
                                parameterValue: '4'},
                                {id: 4,
                                parameterName: 'Workpiece feed drive power, kW',
                                parameterValue: '0.75'},
                                {id: 5,
                                parameterName: 'Workpiece clamp',
                                parameterValue: 'pneumatic'},
                                {id: 6,
                                parameterName: 'Nominal pressure in the pneumatic line, bar',
                                parameterValue: '5'}]
                        },
                        {idGlobal: 4, 
                        header: 'Carousel-type machine for cutting bosses (blocks), which are used in the design of wooden pallets', 
                        picture: 'carousel_type_machine_for_cutting_bosses_(blocks)_which_are_used_in_the_design_of_wooden_pallets.png', 
                        captionText: 'Carousel-type machine for cutting bosses (blocks), which are used in the design of wooden pallets',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Bar section maximum, mm',
                                parameterValue: '150 х 150'},
                                {id: 1,
                                parameterName: 'Bar length maximum, mm',
                                parameterValue: '2000'},
                                {id: 2,
                                parameterName: 'Number of bars in a caramel cassette, pcs',
                                parameterValue: '6 (4)'},
                                {id: 3,
                                parameterName: 'Productivity, pcs/h',
                                parameterValue: '2'},
                                {id: 4,
                                parameterName: 'Total power, kW',
                                parameterValue: '5.2'}]
                        },
                        {idGlobal: 5, 
                        header: 'Automatic machine for knocking wooden bosses (blocks) with a board for pallets',
                        picture: 'automatic_machine_for_knocking_wooden_bosses_(blocks)_with_a_board_for_pallets.png',
                        captionText: 'Automatic machine for knocking wooden bosses (blocks) with a board for pallets',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Number of pistols, pcs',
                                parameterValue: '3'},
                                {id: 1,
                                parameterName: 'Number of nails per block (in line or diagonally), pcs',
                                parameterValue: '2-3'},
                                {id: 2,
                                parameterName: 'Board length, mm',
                                parameterValue: '600 - 1200'},
                                {id: 3,
                                parameterName: 'Productivity by finished units, pcs/min',
                                parameterValue: '20'},
                                {id: 4,
                                parameterName: 'Cassette feeding of blanks',
                                parameterValue: ''}]
                        },
                        {idGlobal: 6, 
                        header: 'Universal conductor for knocking pallets', 
                        picture: 'universal_conductor_for_knocking_pallets.png',
                        captionText: 'Universal conductor for knocking pallets',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Reconfiguration for another size, min',
                                parameterValue: 'no more than 10'},
                                {id: 1,
                                parameterName: 'Pallet size range:',
                                parameterValue: ''},
                                {id: 2,
                                parameterName: 'minimum, mm',
                                parameterValue: '700 x 700'},
                                {id: 3,
                                parameterName: 'maximum, mm',
                                parameterValue: '1350 x 1550'},
                                {id: 4,
                                parameterName: 'Checker size range:',
                                parameterValue: ''},
                                {id: 5,
                                parameterName: 'minimum, mm',
                                parameterValue: '60 x 70 x 70'},
                                {id: 6,
                                parameterName: 'maximum, mm',
                                parameterValue: '120 x 145 x 120'},
                                {id: 7,
                                parameterName: 'Pneumatic clamp for checkers and boards (6 pneumatic cylinders)',
                                parameterValue: ''},
                                {id: 8,
                                parameterName: 'Pneumatic pallet retrieval (4 pneumatic cylinders)',
                                parameterValue: ''},
                                {id: 9,
                                parameterName: 'Easy manual overturning of the pallet (done by the operator)',
                                parameterValue: ''},
                                {id: 10,
                                parameterName: 'Equipped with hangers for 2 nailers (tools and balancers are not included in the price)',
                                parameterValue: ''},
                                {id: 11,
                                parameterName: 'Average productivity, pallets/day',
                                parameterValue: '180 - 250'}]
                        },
                        {idGlobal: 7, 
                        header: 'Corner trimming machine for wooden pallets', 
                        picture: 'corner_trimming_machine_for_wooden_pallets.png',
                        captionText: 'Corner trimming machine for wooden pallets',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Can be integrated into a semi-automatic pallet assembly line',
                                parameterValue: ''},
                                {id: 1,
                                parameterName: 'Dimensions of processed pallets, mm',
                                parameterValue: '600 х 600 – 1200 х 1200'},
                                {id: 2,
                                parameterName: 'Number of saw units, pcs',
                                parameterValue: '4'},
                                {id: 3,
                                parameterName: 'Saw blade diameter, mm',
                                parameterValue: '300'},
                                {id: 4,
                                parameterName: 'Saw speed, rp/min',
                                parameterValue: '3000'},
                                {id: 5,
                                parameterName: 'Saw drive motor power, kW',
                                parameterValue: '4 х 1.5'},
                                {id: 6,
                                parameterName: 'Total installed power, kW',
                                parameterValue: '6'},
                                {id: 7,
                                parameterName: 'Nominal pressure in the pneumatic system, bar',
                                parameterValue: '6'},
                                {id: 8,
                                parameterName: 'Cutting cycle time, s',
                                parameterValue: '2.5'}]
                        },
                        {idGlobal: 8, 
                        header: 'Corner trimming machine for wooden pallets',
                        picture: 'corner_trimming_machine_for_wooden_pallets2.png',
                        captionText: 'Corner trimming machine for wooden pallets',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Dimensions of processed pallets, mm',
                                parameterValue: '600 х 600 – 1200 х 1200'},
                                {id: 1,
                                parameterName: 'Number of saw units, pcs',
                                parameterValue: '2'},
                                {id: 2,
                                parameterName: 'Saw blade diameter, mm',
                                parameterValue: '300'},
                                {id: 3,
                                parameterName: 'Saw speed, rp/min',
                                parameterValue: '3000'},
                                {id: 4,
                                parameterName: 'Saw drive motor power, kW',
                                parameterValue: '2 х 1.5'},
                                {id: 5,
                                parameterName: 'Total installed power, kW',
                                parameterValue: '3'},
                                {id: 6,
                                parameterName: 'Nominal pressure in the pneumatic system, bar',
                                parameterValue: '6'}]
                        }, 
                        {idGlobal: 9, 
                        header: 'Wooden pallet turner', 
                        picture: 'wooden_pallet_turner.png', 
                        captionText: 'Wooden pallet turner',
                        parameters: 
                                [{id: 0,
                                parameterName: 'Dimensions of pallets, mm',
                                parameterValue: '600 х 600 – 1200 х 1200'},
                                {id: 1,
                                parameterName: 'Productivity, pcs/h',
                                parameterValue: '12'},
                                {id: 2,
                                parameterName: 'Total drive power, kW',
                                parameterValue: '1.1'},
                                {id: 3,
                                parameterName: 'Nominal pressure in the pneumatic system, bar',
                                parameterValue: '6'}]
                        }
                        ]
                },      
    catalog:
            {title: "Katalogas",
            photos:
                   [{id: 0, 
                   photo: 'automatic_log_separator_and_feeder.jpg', 
                   captionText: 'Automatic log separator and feeder'},
                   {id: 1, 
                   photo: 'production_process_of_the_heat_exchanger_for_the_aspiration_system.jpg', 
                   captionText: 'Production process of the heat exchanger for the aspiration system'},
                   {id: 2, 
                   photo: 'production_process_of_the_heat_exchanger_for_the_aspiration_system2.jpg', 
                   captionText: 'Production process of the heat exchanger for the aspiration system'},
                   {id: 3, 
                   photo: 'production_process_of_the_heat_exchanger_for_the_aspiration_system3.jpg', 
                   captionText: 'Production process of the heat exchanger for the aspiration system'},
                   {id: 4, 
                   photo: 'сross_section_chain_conveyor_for_boards.jpg', 
                   captionText: 'Cross section chain conveyor for boards'},
                   {id: 5, 
                   photo: 'veneer_conveying_system_with_automatic_step_discharge.jpg', 
                   captionText: 'Veneer conveying system with automatic step discharge'},
                   {id: 6, 
                   photo: 'reconstruction_of_the_roundwood_feeding_table_for_MDF_workshop.jpg', 
                   captionText: 'Reconstruction of the roundwood feeding table for MDF workshop'},
                   {id: 7, 
                   photo: 'wear_resistant_screens.jpg', 
                   captionText: 'Wear-resistant screens'},
                   {id: 8, 
                   photo: 'wear_resistant_screens2.jpg', 
                   captionText: 'Wear-resistant screens'},
                   {id: 9, 
                   photo: 'roller_conveyor_with_screw_ejector.jpg', 
                   captionText: 'Roller conveyor with screw ejector'},
                   {id: 10, 
                   photo: 'kross_chain_conveyor.jpg', 
                   captionText: 'Kross chain conveyor'},
                   {id: 11,
                   photo: 'scraper_conveyor_for_waste_disposal.jpg',
                   captionText: 'Scraper conveyor for waste disposal'},
                   ]
            },
    gallery: 
            {title: "Galerija", 
            photoTitle: "Fotogalerija", 
            videoTitle: "Videogalerija", 
            photoPath: 'participation_in_the_exhibition_Poland3.jpg', 
            videoPath: "automated_machine_for_straight_milling.mp4",
            photoAltText: "Photo is not supported by your browser", 
            videoAltText: "Video is not supported by your browser"},
    photoGallery:
                {photoMainHeader: "Fotogalerija",
                photos: 
                        [{id: 0, 
                        photo: 'participation_in_the_exhibition_Poland.jpg', 
                        captionText: 'Participation in the exhibition, Poland'},
                        {id: 1, 
                        photo: 'participation_in_the_exhibition_Poland2.jpg', 
                        captionText: 'Participation in the exhibition, Poland'},
                        {id: 2, 
                        photo: 'participation_in_the_exhibition_Poland3.jpg', 
                        captionText: 'Participation in the exhibition, Poland'},
                        {id: 3, 
                        photo: 'pallet_board_stacker_elements.jpg', 
                        captionText: 'Pallet board stacker elements'},
                        {id: 4, 
                        photo: 'pallet_board_stacker_elements2.jpg', 
                        captionText: 'Pallet board stacker elements'},
                        {id: 5, 
                        photo: 'pallet_board_stacker_elements3.jpg', 
                        captionText: 'Pallet board stacker elements'},
                        {id: 6, 
                        photo: 'pallet_board_stacker_elements4.jpg', 
                        captionText: 'Pallet board stacker elements'},
                        {id: 7, 
                        photo: 'pallet_board_stacker_elements5.jpg', 
                        captionText: 'Pallet board stacker elements'},
                        {id: 8, 
                        photo: 'pallet_board_stacker_elements6.jpg', 
                        captionText: 'Pallet board stacker elements'},
                        {id: 9, 
                        photo: 'pallet_board_stacker_elements7.jpg', 
                        captionText: 'Pallet board stacker elements'},
                        {id: 10, 
                        photo: 'pallet_board_stacker_elements8.jpg', 
                        captionText: 'Pallet board stacker elements'}
                        ]
                },
    videoGallery:
                {videoMainHeader: "Videogalerija",
                videoNotSupportMessage: "Your browser does not support the video",
                videos: 
                        [
                        {id: 0, 
                        videoRecord: 'pallet_board_stacker.mp4', 
                        captionText: 'Pallet board stacker'},
                        {id: 1, 
                        videoRecord: 'automated_machine_for_straight_milling.mp4', 
                        captionText: 'Automated machine for straight milling SCMM125'}
                        // ,
                        // {id: 2, 
                        // videoRecord: 'painting_line.mp4', 
                        // captionText: 'Painting line'},
                        // {id: 3, 
                        // videoRecord: 'participation_in_the_exhibition_Poland.mp4', 
                        // captionText: 'Participation in the exhibition, Poland'},
                        // {id: 4, 
                        // videoRecord: 'conveyer.mp4', 
                        // captionText: 'Conveyer'},
                        // {id: 5, 
                        // videoRecord: 'pass-through_machine_for_milling_longitudinal_grooves_in_a_pallet_board.mp4', 
                        // captionText: 'Pass-through machine for milling longitudinal grooves in a pallet board'},
                        // {id: 6, 
                        // videoRecord: 'pass-through_machine_for_milling_transverse_grooves_in_a_pallet_board.mp4', 
                        // captionText: 'Pass-through machine for milling transverse grooves in a pallet board'},
                        // {id: 7, 
                        // videoRecord: 'cross_cutting.mp4', 
                        // captionText: 'Cross cutting'},
                        // {id: 8, 
                        // videoRecord: 'cross_cutting_before_painting.mp4',
                        // captionText: 'Cross cutting before painting'},
                        // {id: 9, 
                        // videoRecord: 'overpass.mp4',
                        // captionText: 'Overpass'},
                        // {id: 10, 
                        // videoRecord: 'overpass_and_uncoupler.mp4',
                        // captionText: 'Overpass and uncoupler'},
                        // {id: 11, 
                        // videoRecord: 'Krafter_line_modernization.mp4',
                        // captionText: 'Krafter line modernization'},
                        // {id: 12, 
                        // videoRecord: 'log_conveyer.mp4',
                        // captionText: 'Log conveyer'},
                        // {id: 13, 
                        // videoRecord: 'pallet_board_stacker_element.mp4',
                        // captionText: 'Pallet board stacker element'},
                        // {id: 14, 
                        // videoRecord: 'pallet_board_stacker_element2.mp4',
                        // captionText: 'Pallet board stacker element'},
                        // {id: 15, 
                        // videoRecord: 'noname.mp4',
                        // captionText: ''},
                        // {id: 16, 
                        // videoRecord: 'noname2.mp4',
                        // captionText: ''}
                ]
                },
    contacts: 
            {address: 
                    {heading: 'Contacts of UAB "FerroMetals"', 
                    text: `Laisvės pr. 60-1107,
    LT-05120 Vilnius, Lithuania`, 
                    detailsHeading: "Our details:", 
                    details: `Paysera LT, UAB
    Pilaitės pr. 16, Vilnius, LT-04352, Lithuania
    SWIFT code: EVIULT2VXXX
    IBAN: LT173500010015992602`}, 
            feedback: 
                    {adaptiveButtonText: "Contact us",
                    heading: "Feedback form", 
                    description: "We will contact you soon!", 
                    nameInputText: "Name", 
                    phoneInputText: "Phone number", 
                    emailInputText: "E-mail", 
                    subjectInputText: "Post subject", 
                    messageInputText: "Your message",
                    bottomText: "The data will only be used to contact you!", 
                    buttonText: "SEND MESSAGE",
                    loadingText: "Sending...",
                    resultText: "Your data was sucessfully sent!",
                    errorText: "Something went wrong! Please, try again!"}
            },
    errorPath: "*",
    errorMessage: "404 ERROR!!!",
    returnMessage: "Return Home",
    footer: {copyright: '© 2023, UAB "FerroMetals"', 
            privacyPolicy: "Privatumo politika", 
            siteDeveloper: ["Site developer: ", "Iryna Smyrnova"], 
            address: `Laisvės pr. 60-1107,
LT-05120 Vilnius, Lithuania`},
            privacyPolicy: `PRIVATUMO POLITIKA

Ši asmens duomenų Privatumo politika (toliau – Privatumo politika) taikoma visai informacijai, kurią ši svetainė (su joje esančiu šios Privatumo politikos tekstu) gali gauti apie Vartotoją, taip pat ji taikoma bet kokiems joje esančioms programoms ir produktams.
            
1. SĄVOKOS
            
1.1. Šioje Privatumo politikoje vartojamos šios sąvokos:
            
1.1.1. «Svetainės administracija» – įgalioti valdyti svetainę ir jos vardu veikiantys darbuotojai, kurie organizuoja ir (ar) vykdo asmens duomenų apdorojimą, taip pat nustato asmens duomenų apdorojimo tikslus, apdorojamų asmens duomenų sudėtį, su asmens duomenimis atliekamus veiksmus (operacijas).
            
1.1.2. «Asmens duomenys» – bet kokia informacija, susijusi su fiziniu asmeniu (asmens duomenų subjektu), kuris yra tiesiogiai ar netiesiogiai nustatytas arba gali būti nustatytas.
            
1.1.3. «Asmens duomenų apdorojimas» – bet koks veiksmas (operacija) arba veiksmų (operacijų) visuma, atliekama naudojant automatizavimo priemones arba nenaudojant tokių priemonių, su asmens duomenimis, įskaitant asmens duomenų rinkimą, įrašymą, sisteminimą, kaupimą, saugojimą, patikslinimą (atnaujinimą, keitimą), ištraukimą, naudojimą, perdavimą (platinimą, pateikimą, prieigos suteikimą), nuasmeninimą, blokavimą, pašalinimą, sunaikinimą.
            
1.1.4. «Asmens duomenų konfidencialumas» yra privalomas reikalavimas svetainės Administracijai siekiant užkirsti kelią tyčiniam jų platinimui be asmens duomenų subjekto sutikimo ar nesant kitų teisinių pagrindų.
            
1.1.5. «Svetainės vartotojas (toliau – Vartotojas)» – asmuo, turintis prieigą prie svetainės per internetą ir besinaudojantis šia svetaine savo tikslams.
            
1.1.6. «Slapukai» – nedidelis žiniatinklio serverio siunčiamas ir vartotojo kompiuteryje saugomas duomenų fragmentas, kurį žiniatinklio klientas arba žiniatinklio naršyklė kiekvieną kartą siunčia žiniatinklio serveriui HTTP užklausoje, kai bando atidaryti atitinkamos svetainės puslapį.
            
1.1.7. «IP adresas» – unikalus tinklo mazgo adresas kompiuterių tinkle, sukurtame pagal IP protokolą.
            
2. BENDROSIOS NUOSTATOS
            
2.1. Vartotojo naudojimasis svetaine reiškia sutikimą su šia Privatumo politika ir Vartotojo asmens duomenų apdorojimo sąlygomis.
            
2.2. Jei kuris nors Vartotojas nesutinka su Privatumo politikos sąlygomis, jis privalo nustoti naudotis svetaine.
            
2.3. Ši Privatumo politika taikoma tik šiai svetainei. Svetainės administracija nekontroliuoja ir nėra atsakinga už trečiųjų asmenų svetaines, į kurias Vartotojas gali pereiti paspaudęs šioje svetainėje esančias nuorodas.
            
2.4. Svetainės administracija netikrina svetainės Vartotojo pateiktų asmens duomenų tikrumo.
            
3. PRIVATUMO POLITIKOS DALYKAS
            
3.1. Ši Privatumo politika nustato svetainės Administracijos įsipareigojimus sąmoningai neatskleisti asmens duomenų, kuriuos Vartotojas pateikia įvairiais svetainės Administracijos prašymais (pavyzdžiui, registruodamasis svetainėje, pateikdamas užsakymą, prenumeruodamas naujienlaiškius ir pan.).
            
3.2. Asmens duomenis, kuriuos leidžiama apdoroti pagal šią Privatumo politiką, Vartotojas pateikia užpildydamas Svetainėje specialias formas ir paprastai jie apima šią informaciją:
            
3.2.1. Vartotojo vardą ir pavardę;
            
3.2.2. Vartotojo telefono numerį;
            
3.2.3. Vartotojo el. pašto adresą (e-mail);
            
3.2.4. Vartotojo gyvenamosios vietos adresą ir kitus duomenis.
            
3.3. Svetainės Administracija taip pat imasi veiksmų siekdama apsaugoti Asmens duomenis, kurie automatiškai perduodami Vartotojui lankantis svetainės puslapiuose:
            
IP adresas;
            
slapukų informacija;
            
informacija apie naršyklę (ar kitą programą, per kurią buvo gauta prieiga prie svetainės);
            
prieigos laikas;
            
aplankytų puslapių adresai;
            
refereris (ankstesnio puslapio adresas) ir kt.
            
3.3.1. Išjungus slapukus, kai kurios svetainės funkcijos gali neveikti.
            
3.3.2. Svetainė renka statistinę informaciją apie savo lankytojų IP adresus. Ši informacija naudojama techninėms problemoms nustatyti ir spręsti, taip pat vykdomų operacijų teisingumui kontroliuoti.
            
3.4. Bet kokią kitą aukščiau nenurodytą asmens informaciją (apie užsakymų istorija, naudojamas naršykles ir operacines sistemas bei kt.) draudžiama sąmoningai atskleisti, išskyrus šios Privatumo politikos 5.2. ir 5.3. punktuose nurodytus atvejus.
            
4. VARTOTOJO ASMENS DUOMENŲ RINKIMO TIKSLAS
            
4.1. Svetainės Administracija gali naudoti Vartotojo asmens duomenis šiais tikslais:
            
4.1.1. Vartotojo, užsiregistravusio svetainėje ir norinčio pateikti užsakymą ir (arba) sudaryti Sutartį, identifikavimas.
            
4.1.2. Prieigos prie personalizuotų svetainės išteklių suteikimas Vartotojui.
            
4.1.3. Ryšio su Vartotoju nustatymas, įskaitant pranešimų ir užklausų, susijusių su naudojimusi svetaine bei paslaugų teikimu, siuntimą, taip pat Vartotojo užklausų ir paraiškų apdorojimas.
            
4.1.4. Vartotojo buvimo vietos nustatymas, siekiant užtikrinti saugumą ir užkirsti kelią sukčiavimui.
            
4.1.5. Vartotojo pateiktų asmens duomenų tikrumo ir išsamumo patvirtinimas.
            
4.1.6. Paskyros sukūrimas norint pateikti užsakymus, jei Vartotojas sutiko sukurti paskyrą.
            
4.1.7. Pranešimai svetainės Vartotojui apie Užsakymo būseną.
            
4.1.8. Mokėjimų apdorojimas ir gavimas.
            
4.1.9. Veiksmingos klientų techninės pagalbos suteikimas Vartotojui, iškilus problemoms, susijusioms su svetainės naudojimu.
            
4.1.10. Produktų atnaujinimų, specialių pasiūlymų, informacijos apie kainas, naujienlaiškių ir kitos informacijos svetainės ar svetainės partnerių vardu teikimas Vartotojui esant jo sutikimui.
            
4.1.11. Reklaminės veiklos vykdymas esant Vartotojo sutikimui.
            
4.1.12. Prieigos prie trečiųjų šalių svetainių ar šios svetainės partnerių paslaugų suteikimas Vartotojui jų pasiūlymų, atnaujinimų ar paslaugų gavimo tikslais.
            
5. ASMENS DUOMENŲ APDOROJIMO METODAI IR TERMINAI
            
5.1. Vartotojo asmens duomenų apdorojimas vykdomas neribotą laiką, bet kokiu teisėtu būdu, įskaitant apdorojimą asmens duomenų informacinėse sistemose naudojant automatizavimo priemones arba nenaudojant tokių priemonių.
            
5.2. Vartotojas sutinka, kad svetainės Administracija turi teisę perduoti asmens duomenis trečiosioms šalims, ypač kurjerių tarnyboms, pašto organizacijoms, telekomunikacijų operatoriams, tik Vartotojo užklausų, pateiktų svetainėje pagal Viešojo pasiūlymo sutartį, vykdymo tikslais.
            
5.3. Vartotojo asmens duomenys gali būti perduodami įgaliotoms valstybės valdžios institucijoms tik galiojančių teisės aktų nustatytais pagrindais ir tvarka.
            
6. ŠALIŲ ĮSIPAREIGOJIMAI
            
6.1. Vartotojas įsipareigoja:
            
6.1.1. Pateikti teisingą ir tikrą informaciją apie asmens duomenis, būtiną norint naudotis svetaine.
            
6.1.2. Pasikeitus šiai informacijai atnaujinti ar papildyti pateiktą informaciją apie asmens duomenis.
            
6.1.3. Imtis priemonių siekiant apsaugoti prieigą prie savo konfidencialių duomenų, kurie saugomi svetainėje.
            
6.2. Svetainės Administracija įsipareigoja:
            
6.2.1. Naudoti gautą informaciją tik šios Privatumo politikos 4 punkte nurodytais tikslais.
            
6.2.2. Neatskleisti Vartotojo asmens duomenų, išskyrus atvejus, nurodytus šios Privatumo politikos 5.2. ir 5.3. punktuose.
            
6.2.3. Paaiškėjus, kad buvo pateikti melagingi asmens duomenys ar įvykdyti neteisėti veiksmai, atlikti asmens duomenų, susijusių su atitinkamu Vartotoju, blokavimą patikrinimo laikotarpiui nuo to momento, kai Vartotojas ar jo teisėtas atstovas ar institucija, įgaliota ginti asmens duomenų subjektų teises, kreipėsi ar pateikė prašymą Administracijai.
            
7. ŠALIŲ ATSAKOMYBĖ
            
7.1. Svetainės Administracija yra atsakinga už sąmoningą Vartotojo Asmens duomenų atskleidimą pagal galiojančius teisės aktus, išskyrus atvejus, numatytus šios Privatumo politikos 5.2., 5.3. ir 7.2. punktuose.
            
7.2. Asmens duomenų praradimo arba atskleidimo atveju svetainės Administracija nėra atsakinga, jei ši konfidenciali informacija:
            
7.2.1. Tapo viešai žinoma prieš praradimą ar atskleidimą.
            
7.2.2. Buvo gauta iš trečiosios šalies šaltinio iki to momento, kai ją gavo svetainės Administracija.
            
7.2.3. Buvo gauta trečiosios šalies neteisėtos prieigos prie svetainės failų būdu.
            
7.2.4. Buvo atskleista gavus Vartotojo sutikimą.
            
7.3. Vartotojas yra atsakingas už pateiktų Asmens duomenų teisėtumą, teisingumą ir tikrumą pagal galiojančius teisės aktus.
            
8. GINČŲ SPRENDIMAS
            
8.1. Prieš kreipiantis į teismą su ieškiniu dėl ginčų, kylančių iš svetainės Vartotojo ir svetainės Administracijos santykių, privaloma pateikti pretenziją (raštišką pasiūlymą dėl savanoriško ginčo sprendimo).
            
8.2. Pretenzijos gavėjas per 30 kalendorinių dienų nuo pretenzijos gavimo dienos raštu praneša pareiškėjui apie pretenzijos nagrinėjimo rezultatus.
            
8.3. Šalims nepasiekus susitarimo, ginčas bus perduotas teisminei institucijai nagrinėti pagal galiojančius teisės aktus.
            
8.4. Šiai Privatumo politikai ir santykiams tarp Vartotojo ir svetainės Administracijos taikomi galiojantys teisės aktai.
            
9. PAPILDOMOS SĄLYGOS
            
9.1. Svetainės Administracija turi teisę keisti šią Privatumo politiką be Vartotojo sutikimo.
            
9.2. Nauja Privatumo politika įsigalioja nuo jos paskelbimo Svetainėje momento, jei nauja Privatumo politikos redakcija nenumato kitaip.`
};

export default dataLt