import { Button } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import { useState } from 'react';
import './Detection.css';

function Detection() {
	const [result, setResult] = useState(null);
	const [files, setFiles] = useState(null);

	const uploadImage = () => {
		let reader = new FileReader();
		reader.readAsDataURL(files[0]);
		reader.onload = (e) => {
			const URL__ENDPOINT = 'http://localhost:5000/predict';
			console.log(files[0]);
			const formData = new FormData();
			formData.append('file', files[0], files[0].name);
			console.log(files[0]);
			axios.post(URL__ENDPOINT, formData).then((res) => {
				console.log(res);
				setResult(res.data);
			});
		};
	};

	return (
		<div className="detection">
			<h2>PNEUMONIA DETECTOR</h2>
			<p className="detection__help">
				<span style={{ color: 'blue' }}>How it works: </span>Click the <strong style={{ color: 'blue' }}>UPLOAD</strong>{' '}
				image button to upload the image and Click the <strong style={{ color: 'blue' }}>DETECT</strong> button to get
				the result.
			</p>
			<div className="detection__sampleInputs">
				<h3>Sample Inputs</h3>
				<div className="detection__sampleInputsImages">
					<img src="https://www.radiologyinfo.org/gallery-items/images/chest-xray.jpg" alt="" />
					<img
						src="https://prod-images-static.radiopaedia.org/images/157210/332aa0c67cb2e035e372c7cb3ceca2_jumbo.jpg"
						alt=""
					/>
				</div>
			</div>

			{result && (
				<div className={result !== 'Normal' ? 'detection__resultPositive' : 'detection__resultNegative'}>
					<p> Result: {result}</p>
				</div>
			)}
			<div className="detection__uploadDetect">
				{/* upload */}
				<Button className="detection__uploadDetectUpload">
					<label for="imageUpload">UPLOAD</label>
					<PublishIcon fontSize="small" className="detection__uploadDetectUploadIcon" />
				</Button>

				{/* input file */}
				<input
					style={{ display: 'none' }}
					type="file"
					name="file"
					id="imageUpload"
					accept=".png, .jpg, .jpeg"
					onChange={(e) => setFiles(e.target.files)}
				/>

				{/* detect */}
				<Button className="detection__uploadDetectDetect" onClick={uploadImage}>
					DETECT
					<SearchIcon fontSize="small" className="detection__uploadDetectUploadIcon" />
				</Button>
			</div>
		</div>
	);
}

export default Detection;
