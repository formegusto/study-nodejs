const os = require("os");

console.log("운영체제 정보--------------------");
console.log(os.arch());
console.log(os.platform());
console.log(os.type());
console.log(os.uptime());
console.log(os.hostname());
console.log(os.release());

console.log("경로---------------------------");
console.log(os.homedir());
console.log(os.tmpdir());

console.log("cpu 정보-----------------------");
console.log(os.cpus());
console.log(os.cpus().length);

console.log("메모리 정보----------------------");
console.log(os.freemem());
console.log(os.totalmem());
/*
운영체제 정보--------------------
x64
darwin
Darwin
9221
formegustoui-MacBookPro.local
20.3.0
경로---------------------------
/Users/formegusto
/var/folders/52/4yvp7r991px0gmq4wyr894j40000gn/T
cpu 정보-----------------------
[
  {
    model: 'Intel(R) Core(TM) i7-1068NG7 CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 824490, nice: 0, sys: 611670, idle: 4049820, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-1068NG7 CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 124910, nice: 0, sys: 136910, idle: 5223440, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-1068NG7 CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 735020, nice: 0, sys: 486220, idle: 4264040, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-1068NG7 CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 121680, nice: 0, sys: 110730, idle: 5252860, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-1068NG7 CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 632710, nice: 0, sys: 402970, idle: 4449590, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-1068NG7 CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 119990, nice: 0, sys: 97340, idle: 5267940, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-1068NG7 CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 570300, nice: 0, sys: 352100, idle: 4562870, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-1068NG7 CPU @ 2.30GHz',
    speed: 2300,
    times: { user: 120080, nice: 0, sys: 88960, idle: 5276220, irq: 0 }
  }
]
8
메모리 정보----------------------
8704757760
34359738368
*/
