#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const { data } = require('autoprefixer');

let base_content = `<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<!-- linear -->
{:else if variant === 'Outline'}
	<!-- outline -->
{:else if variant === 'Bold'}
	<!-- bold -->
{:else if variant === 'Bulk'}
	<!-- bulk -->
{:else if variant === 'Broken'}
	<!-- broken -->
{:else if variant === 'TwoTone'}
	<!-- twotone -->
{/if}
`;

function read_list_files(dir) {
	const directoryPath = path.join(__dirname, dir);
	//passsing directoryPath and callback function
	fs.readdir(directoryPath, function (err, files) {
		//handling error
		if (err) {
			return console.log('Unable to scan directory: ' + err);
		}
		//listing all files using forEach
		files.forEach(function (file) {
			// Do whatever you want to do with the file
			if (file !== '.DS_Store') {
				// get icon type
				let icon_type = dir.replace('Svg/All/', '');

				// get icon contents
				let icon_svg = fs.readFileSync(`${dir}/${file}`, 'utf8');
				icon_svg = icon_svg.replaceAll(`"24"`, '{`${size}`}');
				icon_svg = icon_svg.replaceAll(`"#292D32"`, '{`${color}`}');

				let file_name = file.replaceAll('.svg', '').replaceAll('-', ' ');
				file_name = file_name.split(' ');
				file_name = file_name
					.map((word) => {
						return word[0].toUpperCase() + word.substring(1);
					})
					.join(' ');
				file_name = file_name.replaceAll(' ', '');
				let first_char = file_name.substring(0, 1);
				if (!isNaN(first_char)) {
					file_name = 'I' + file_name;
				}

				// Current Content
				let full_file_name = `src/lib/${file_name}.svelte`;

				// Use base content if file empty
				let content = fs.readFileSync(full_file_name, 'utf8');
				if (content == '') content = base_content;

				// replace tag with icons
				content = content.replace(`<!-- ${icon_type} -->`, `${icon_svg}`);

				// write updates
				fs.writeFile(full_file_name, content, function (error) {
					if (error) throw error;
				});
			}
		});
	});
}

// read_list_files('Svg/All/linear');
// read_list_files('Svg/All/outline'); // add 16 items
// read_list_files('Svg/All/bold'); // add 15 items -> 1
// read_list_files('Svg/All/bulk'); // add 11 items -> 0
// read_list_files('Svg/All/broken'); // add 18 items -> 3
// read_list_files('Svg/All/twotone'); // add 17 items -> 5
