import {
    RESERVATION_VILLARESERVATIONLIST, RESERVATION_VILLARESERVATIONREPORT,
    VILLAS_LIST_LINK
} from "types/linkTypes";

export default function getMenuItems(navigate) {
    return [
        {
            label: 'Villas',
            icon: 'pi pi-fw pi-home',
            items: [
                // {
                //     label: 'Villas',
                //     // icon: 'pi pi-fw pi-plus',
                //     command: () => {navigate(VILLAS_LIST_LINK)}
                // },
                // {
                //     label: 'Contacts',
                //     icon: 'pi pi-fw pi-trash'
                // },

            ]
        },
        // {
        //     label: 'Calendar',
        //     icon: 'pi pi-fw pi-calendar',
        //     items: [
        //         {
        //             label: 'Left',
        //             icon: 'pi pi-fw pi-align-left'
        //         },
        //         {
        //             label: 'Right',
        //             icon: 'pi pi-fw pi-align-right'
        //         },
        //         {
        //             label: 'Center',
        //             icon: 'pi pi-fw pi-align-center'
        //         },
        //         {
        //             label: 'Justify',
        //             icon: 'pi pi-fw pi-align-justify'
        //         },
        //
        //     ]
        // },
        {
            label: 'Reports',
            icon: 'pi pi-fw pi-book',
            items: [
                // {
                //     label: 'Villa reservations list',
                //     // icon: 'pi pi-fw pi-user-plus',
                //     command: () => {navigate(RESERVATION_VILLARESERVATIONLIST)}

                // },
                // {
                //     label: 'Villa reservations report',
                //     // icon: 'pi pi-fw pi-user-plus',
                //     command: () => {navigate(RESERVATION_VILLARESERVATIONREPORT)}

                // },
                // {
                //     label: 'Delete',
                //     icon: 'pi pi-fw pi-user-minus',
                //
                // },
                // {
                //     label: 'Search',
                //     icon: 'pi pi-fw pi-users',
                //     items: [
                //         {
                //             label: 'Filter',
                //             icon: 'pi pi-fw pi-filter',
                //             items: [
                //                 {
                //                     label: 'Print',
                //                     icon: 'pi pi-fw pi-print'
                //                 }
                //             ]
                //         },
                //         {
                //             icon: 'pi pi-fw pi-bars',
                //             label: 'List'
                //         }
                //     ]
                // }
            ]
        },
        // {
        //     label: 'PaymentsPage',
        //     icon: 'pi pi-fw pi-euro',
        //     items: [
        //         {
        //             label: 'Payment list',
        //             icon: 'pi pi-fw pi-pencil',
        //         },
        //         {
        //             label: 'Payment balance report',
        //             icon: 'pi pi-fw pi-calendar-times',
        //         },
        //         {
        //             label: 'Refund list',
        //             icon: 'pi pi-fw pi-calendar-times',
        //         }
        //     ]
        // },
        // {
        //     label: 'Admin',
        //     icon: 'pi pi-fw pi-power-off'
        // }
    ]
}