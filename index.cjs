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
	<!-- Linear -->
{:else if variant === 'Outline'}
	<!-- Outline -->
{:else if variant === 'Bold'}
	<!-- Bold -->
{:else if variant === 'Bulk'}
	<!-- Bulk -->
{:else if variant === 'Broken'}
	<!-- Broken -->
{:else if variant === 'TwoTone'}
	<!-- TwoTone -->
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
				let file_name = file
					.replace('.svg', '')
					.replace('-', ' ')
					.replace('-', ' ')
					.replace('-', ' ');
				file_name = file_name.split(' ');
				file_name = file_name
					.map((word) => {
						return word[0].toUpperCase() + word.substring(1);
					})
					.join(' ');
				file_name = file_name.replace(' ', '').replace(' ', '').replace(' ', '');
                let first_char = file_name.substring(0,1);
                if (!isNaN(first_char)) {
                    file_name = "I" + file_name;
                }
				fs.writeFile(`./src/lib/${file_name}.svelte`, base_content, function (error) {
					if (error) throw error;
				});
			}
		});
	});
}

read_list_files('Svg/All/linear');
// read_list_files('Svg/All/outline');
// read_list_files('Svg/All/bold');
// read_list_files('Svg/All/bulk');
// read_list_files('Svg/All/broken');
// read_list_files('Svg/All/twotone');
// Creating a function which takes a file as input
// const readFileLines = filename => fs.readFileSync(filename).toString('UTF8');
