import Upload from '@/components/ui/Upload';
import { PF } from '@/utils';
import { File } from '@/utils/extends';
import { getIn, useFormikContext } from 'formik';
import * as React from 'react';
import { FcImageFile } from 'react-icons/fc';
import { ProductDto } from '../config';

interface IUploadImagesProductProps {}

const UploadImagesProduct: React.FunctionComponent<IUploadImagesProductProps> = props => {
	const {} = props;

	const { values, setFieldValue } = useFormikContext<ProductDto>();
	const files = getIn(values, 'images') as string[] | File[];

	function onChange(newFiles: File[]) {
		setFieldValue('images', [...newFiles, ...files]);
	}

	function onDelete(deletedFile: File | string) {
		if (typeof deletedFile === 'string') {
			//@ts-ignore
			const newFiles = files.filter(file => file !== deletedFile) as any[];
			setFieldValue('images', newFiles);
		} else {
			//@ts-ignore
			const newFiles = files.filter(file => {
				if (typeof file === 'string') return file;
				return file.tempID !== deletedFile.tempID;
			});
			setFieldValue('images', newFiles);
		}
	}

	console.log(values);

	return (
		<div className="form-group">
			<Upload
				multiple
				//@ts-ignore
				fileList={files}
				onChange={onChange}
				onFileRemove={onDelete}
				baseUrlPreview={PF + '/product'}
			>
				<div className="my-8 text-center">
					<div className="text-6xl mb-4 flex justify-center">
						<FcImageFile />
					</div>
					<p className="font-semibold">
						<span className="text-gray-800 dark:text-white">
							Drop your image here, or{' '}
						</span>
						<span className="text-blue-500">browse</span>
					</p>
					<p className="mt-1 opacity-60 dark:text-white">
						Support: jpeg, jpg, png, webp
					</p>
				</div>
			</Upload>
		</div>
	);
};

export default UploadImagesProduct;
