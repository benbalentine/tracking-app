'use server';

import { StatsD } from "hot-shots";

const client = new StatsD({
        host: process.env.STATSD_HOST,
        port: 8125,
        globalTags: {},
        prefix: `${process.env.STATSD_BUCKET}.`,
        errorHandler: function (error) {
            console.log("Socket errors caught here: ", error);
        }
    });

export async function report_stats(name, value, interval=1) {
        console.log(`statsd client tried to report: ${name} ${value}`)
        client.increment(name, value, interval)
}
