#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

function read_list_files(dir) {
	const directoryPath = path.join(__dirname, dir);
	//passsing directoryPath and callback function
	fs.readdir(directoryPath, function (err, files) {
		//handling error
		if (err) {
			return console.log('Unable to scan directory: ' + err);
		}

		let imp = '';
		let array_icon = '';
		files.forEach(function (file) {
			if (file !== 'icons.ts') {
				imp = imp + `import ${file.replace('.svelte', '')} from "$lib/${file}";\n`;
				array_icon =
					array_icon +
					`{
    icon: ${file.replace('.svelte', '')}, 
    name: '${file.replace('.svelte', '')}', 
    category: ''
},\n`;
			}
		});
		let full_file_name = `src/lib/icons.ts`;
		let content = `${imp}

export const icons = [${array_icon}];
        `;
		fs.writeFile(full_file_name, content, function (error) {
			if (error) throw error;
		});
	});
}

read_list_files('src/lib');
