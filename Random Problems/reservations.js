/*
class Reservation
    table_id: _id
    interval: [start, end]

map(table_id: [start: end] (sort by start time)

map(table_id: {
    startHour: {
        startMinutes: end
    }
)
check if table_id is empty, delete

make reservation
    (reservation)    
    table_id: _id
    interval: [start, end]
check if reservation exists
    table_id
    interval: [start, end]
*/

// class Reservation {
//     constructor(table_id, interval) {
//         this.table_id = table_id
//         this.interval = interval
//     }
// }
/*
map(table_id: [[start,end]] (sort) nlogn insertion
)

map("1": { table_id
        "7": { hour
            "1": [8, 0] minutes
        }
    }
)
0,1,2,3

7.30-8.15 --> 7,2:8,1

        
1: 7.15-8

start={hour:, min:}
end={hour:, min}
interval
[stdTime, stdTime]

*/

// class Time {
//     constructor(hour, minutes) {
//         this.hour = hour
//         this.minutes = minutes
//     }
// }

// class Interval {
//     constructor(start, end) {
//         this.start = new Time(start[0], start[1])
//         this.end = new Time(end[0], end[1])
//     }
// }

        /*
        if map[table_id]
            check all previous times for overlap
                iterate

                other.start <= res.start && res.end < other.end  earlier
                    reject
                other.start >= res.start && res.end > other.start

            if table[res.start.hour] hour exists
                iterate minutes
                    if earlier && end overlaps
                        reject
                    if later && res.end overlaps
                        reject
            else
                if table[res.end.hour] if start hour exists on table
                    if table[res.end.hour] end hour exists
                        if table[res.end.hour][res.end.minutes]
                            reject
                        else table[res.end.hour] iterate end hour
                            if earlier minute time is present
                                reject
            
                            
        create && confirm        */
         // if (table) {
        //     if(!table.hasOwnProperty(interval.start.hour)) {
        //         if(table.hasOwnProperty(interval.end.hour)) {
        //             for(let minute in table[interval.end.hour]) {
        //                 if(Number(minute) <= interval.end.minutes) return false
        //             }
        //         }
        //     } else {
        //         for(let minute in table[interval.start.hour]) {
        //             if(Number(minute) < interval.start.minutes && >)
        //         }
        //     }
        // } 
        // table = {...table, [interval.start.hour]: {
        //     ...table[interval.start.hour],
        //     [interval.start.minutes]: [[interval.end.hour], [interval.end.minutes]]
        // }}

class Reservation {
    constructor(table_id, start, end) {
        this.table_id = table_id
        this.start = start
        this.end = end
    }
}
/*
    map(
        table_id: [Reservation]
    )
    merge adjacent intervals
        + conserve space
        - sort intervals nlogn
        - merge intervals n

*/

class OpenTable {
    constructor() {
        this.map = new Map()
    }
    // time n
    makeReservation(reservation) {
        let table = this.map.get(reservation.table_id)
        if (table) {
            for(let item of table) {
                if(item.start <= reservation.start && reservation.start < item.end) throw new Error('overlapping')
                if(item.start >= reservation.start && reservation.end > item.start) throw new Error('overlapping')
            }
            table.push(reservation)
        } else {
            table = [reservation]
        }
        this.map.set(reservation.table_id, table)
        return table
    }
    //time n
    checkReservation(reservation) {
        const table = this.map.get(reservation.table_id)
        if(!table) return false
        for(let item of table) {
            if(item.start === reservation.start && item.end === reservation.end) return true
        }
        return false
    }
}

const res1 = new Reservation(1, 1300, 1330)
const res2 = new Reservation(1, 1400, 1430)
const res3 = new Reservation(1, 1330, 1430)

const r = new OpenTable()
r.makeReservation(res1)
r.makeReservation(res2)
r.makeReservation(res3)
// console.log(r.checkReservation(1,new Interval(1300,1330)))