var nameList = localStorage.getItem("nameList");
      if (nameList) {
        var rows = nameList.split("\n");
        var tableBody = document.getElementById("name-list");
        for (var i = 0; i < rows.length; i++) {
          if (rows[i]) {
            var columns = rows[i].split(" ");
            var row = document.createElement("tr");
            var cell1 = document.createElement("td");
            var cell2 = document.createElement("td");
            var cell3 = document.createElement("td");
            var cell4 = document.createElement("td");
            cell1.textContent = columns[0];
            cell2.textContent = columns[1].charAt(0).toUpperCase() + columns[1].slice(1);
            cell3.textContent = columns[2].charAt(0).toUpperCase() + columns[2].slice(1);
            var button = document.createElement("button");
            button.textContent = "Show";
            button.className = "button";
            button.addEventListener("click", function() {
              var siraNo = this.parentNode.parentNode.cells[0].textContent;
              var ad = this.parentNode.parentNode.cells[1].textContent;
              var soyad = this.parentNode.parentNode.cells[2].textContent;
              var url = "q_show.html?siraNo=" + siraNo + "&ad=" + ad + "&soyad=" + soyad;
              window.open(url, "q_show.html?siraNo=");
            });
            cell4.appendChild(button);
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            tableBody.appendChild(row);
          }
        }
      }