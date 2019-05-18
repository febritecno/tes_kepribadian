$(function() {

    pertama = [0, 0, 0]
    kedua = [0, 0, 0]


    $(".jawab-a").click(function() {
        pertama[0]++
    })

    $(".jawab-b").click(function() {
        pertama[1]++
    })


    $(".jawab-c").click(function() {
        pertama[2]++
    })

    $(".jawab-d").click(function() {
        kedua[0]++
    })

    $(".jawab-e").click(function() {
        kedua[1]++
    })

    $(".jawab-f").click(function() {
        kedua[2]++
    })


    sembunyi = function() {
        $(".soal").hide()
		$(".ulang").show()
    }




    sembunyi()
	
	$(".ulang").hide()
    $(".prolog").show()

    $(".jawab-prolog").click(function() {
        sembunyi()
        $(".soal-a1").show()
    })

    $(".soal-a1 .jawab").click(function() {
        sembunyi()
        $(".soal-a2").show()
    })

    $(".soal-a2 .jawab").click(function() {
        sembunyi()
        $(".soal-a3").show()
    })

    $(".soal-a3 .jawab").click(function() {
        sembunyi()
        $(".soal-a4").show()
    })

    $(".soal-a4 .jawab").click(function() {
        sembunyi()
        $(".soal-a5").show()
    })

    $(".soal-a5 .jawab").click(function() {
        sembunyi()
        $(".soal-a6").show()
    })

    $(".soal-a6 .jawab").click(function() {
        sembunyi()
        $(".soal-a7").show()
    })

    $(".soal-a7 .jawab").click(function() {
        sembunyi()
        $(".soal-b1").show()
    })

    $(".soal-b1 .jawab").click(function() {
        sembunyi()
        $(".soal-b2").show()
    })

    $(".soal-b2 .jawab").click(function() {
        sembunyi()
        $(".soal-b3").show()
    })

    $(".soal-b3 .jawab").click(function() {
        sembunyi()
        $(".soal-b4").show()
    })

    $(".soal-b4 .jawab").click(function() {
        sembunyi()
        $(".soal-b5").show()
    })

    $(".soal-b5 .jawab").click(function() {
        sembunyi()
        $(".soal-b6").show()
    })

    $(".soal-b6 .jawab").click(function() {
        sembunyi()
        $(".soal-b7").show()
    })

    $(".soal-b7 .jawab").click(function() {
        sembunyi()


        largest_pertama = Math.max.apply(Math, pertama)
        posisi_pertama = pertama.indexOf(largest_pertama)

        largest_kedua = Math.max.apply(Math, kedua)
        posisi_kedua = kedua.indexOf(largest_kedua)

        if (posisi_pertama == 0 && posisi_kedua == 0) {
            $(".hasil-8").show()
        } else if (posisi_pertama == 1 && posisi_kedua == 0) {
            $(".hasil-3").show()
        } else if (posisi_pertama == 2 && posisi_kedua == 0) {
            $(".hasil-7").show()
        } else if (posisi_pertama == 0 && posisi_kedua == 1) {
            $(".hasil-2").show()
        } else if (posisi_pertama == 1 && posisi_kedua == 1) {
            $(".hasil-6").show()
        } else if (posisi_pertama == 2 && posisi_kedua == 1) {
            $(".hasil-1").show()
        } else if (posisi_pertama == 0 && posisi_kedua == 2) {
            $(".hasil-5").show()
        } else if (posisi_pertama == 1 && posisi_kedua == 2) {
            $(".hasil-9").show()
        } else if (posisi_pertama == 2 && posisi_kedua == 2) {
            $(".hasil-4").show()
        }

    })






})
