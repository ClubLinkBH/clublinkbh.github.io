const clubsList = [
    ["Adventure Club", "Mrs. McCoy"],
    ["American Sign Language Club", "Mr. Murano"],
    ["Asian Student Alliance (ASA)", "Mr. Mikolajczak"],
    ["Black Student Alliance (BSA)", "Mrs. Pinderhughes"],
    ["Bloomfield Health & Wellness", "Mrs. Thav"],
    ["Board Game Club", "Mr. Cunningham"],
    ["Book Club", "Mrs. Shorter / Mrs. Allan"],
    ["Build On", "Mr. Cameron"],
    ["Chaldean American Student Association", "Mrs. Toma"],
    ["Chamber Orchestra", "Mr. Brennan"],
    ["Chess Club", "Mr. Thomas"],
    ["Chinese National Honor Society", "Mrs. Lee-Jan"],
    ["Community Service Club", "Mrs. Laliberte"],
    ["Computer Science Honor Society", "Mr. Zulkiewski"],
    ["DECA", "Mrs. Kavanagh"],
    ["Environmental Club", "Mrs. Bitterman-Wenson"],
    ["eSports", "Mr. Strager"],
    ["Fellowship of Christian Athletes (FCA)", "Mr. Loria"],
    ["Fishing Club", "Mr. Laliberte"],
    ["French Club", "Madame Hammerle"],
    ["Forensics", "Mr. Companari"],
    ["Future Farmers of America (FFA) Bowers Farm", "Ms. Lynn"],
    ["Genes in Disease & Symptoms (GIDAS)", "Mrs. Davis"],
    ["Gender and Sexuality Alliance (GSA)", "Mr. Ryfiak"],
    ["Generation to Generation Club", "Mrs. Lyon"],
    ["Girls in STEM", "Mrs. Honkala"],
    ["Global Voice Society", "Ms. Losey"],
    ["Hawkappella", "Mrs. Riley"],
    ["Historically Black Colleges & Universities (HBCU)", "Mrs. Brooks"],
    ["Healing Hearts Bracelet Club", "Mrs. Pinderhughes"],
    ["History Club", "Mr. Cameron"],
    ["HOSA ", "Dr. Collis"],
    ["Indian American Student Alliance/ South Asian Student Alliance (IASA/SASA)", "Ms. Twomey"],
    ["Interact Club", "Mr. Ryfiak"],
    ["International Cooking Club", "Ms. Schemel"],
    ["International Thespian Society 1st semester*", "Mrs. Bogrette"],
    ["Investment Club", "Mr. Thomas"],
    ["Jewish Student Alliance (JSA)", "Ms. Matz"],
    ["Krafts for Kids", "Ms. Russell"],
    ["Latino Student Alliance", "Ms. Schemel"],
    ["Literary Magazine", "Mrs. Thav"],
    ["Medical Careers Club", "Dr. Collis"],
    ["Med Talks", "Mr. Hearit"],
    ["Model UN", "Mr. MacLeod"],
    ["Muslim Student Alliance (MSA)", "Mrs. Bevier"],
    ["National Honor Society", "Mrs. Laliberte"],
    ["Neurology Youth Advocacy Association (NYAA)", "Ms. Small"],
    ["Newcomers Welcome", "Mrs. Tesca"],
    ["Newspaper", "Ms. Matz"],
    ["Political Awareness Club (PAC)", "Mr. Cameron"],
    ["Postitivity Club", "Ms. Russell"],
    ["Psych Bites", "Ms. Small"],
    ["Quiz Bowl", "SPONSOR NEEDED"],
    ["Robotics", "Ms. Murray"],
    ["Science Olympiad", "Mrs. DeLuca"],
    ["Social Connections Club", "Ms. Jones / Mrs. Haines"],
    ["STEM & Coding Club", "Mr. Zulkiewski"],
    ["Spirit Squad", "SPONSOR NEEDED"],
    ["Student Ambassador", "Mrs. Abel"],
    ["Summer Youth Dialogue Club", "Mr. Vaughn / Ms. Twomey"],
    ["Technical Theatre", "Mr. Yaple"],
    ["The BIFF", "Mr. Wittebols / Mrs. Tier"],
    ["The Red Cross Club", "Nurse Glazer"],
    ["Theatre Club 2nd semester*", "Mrs. Bogrette"],
    ["Tri-M", "Mr. Posner"],
    ["UNICEF", "Mrs. Novak"],
    ["Unified Friendship Club", "Mr. Varner"],
    ["Weight Training Club", "Mr. Alfano"],
    ["Winter Guard", "Mrs. Welch"],
    ["Words with Actions", "Mrs. Cribbs"],
    ["Yearbook", "Mrs. Ossenmacher"],
    ["Youth Action Board (BBCC)", "Ms. Michaud"]
];

addEventListener("load", () => {
    const clubsTable = document.getElementById("clubs-list");
    const rows = [];

    for (const [name, sponsor] of clubsList) {
        const row = document.createElement("tr");
        const nameEl = document.createElement("td");
        const sponsorEl = document.createElement("td");

        nameEl.innerText = name;
        sponsorEl.innerText = sponsor;
        nameEl.className = "club-name";
        row.append(nameEl, sponsorEl);
        rows.push(row);
        clubsTable.append(row);
    }

    const clubsFilter = document.getElementById("clubs-filter");
    let timeout = null;
    clubsFilter.addEventListener("input", () => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            const text = clubsFilter.value.trim().toLowerCase();
            if (text.length === 0) {
                for (const row of rows) row.style.display = "table-row";
                return;
            }

            for (const row of rows)
                row.style.display = row.getElementsByClassName("club-name")[0].innerText.toLowerCase().includes(text) ? "table-row" : "none";
        }, 500);
    })
});