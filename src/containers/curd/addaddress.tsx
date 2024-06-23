import { useState } from 'react';
import { useRouter } from 'next/router';

export default function InsertData({ provinces, districts, subdistricts }) {
    const [formData, setFormData] = useState({
        address: '',
        address2: '',
        selectedProvince: '',
        selectedDistrict: '',
        selectedSubdistrict: ''
    });
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Kirim data ke server
        e.preventDefault();
        const { address, address2, selectedSubdistrict } = formData;
        
        // Ubah format data sesuai dengan endpoint yang diinginkan
        const postData = {
            Address: address,
            Address2: address2,
            SubdistrictID_fk: selectedSubdistrict
        };
        try {
            const response = await fetch('http://node-fr-02.stegripe.org:5021/address', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });
            if (response.ok) {
                // Data berhasil disimpan
                console.log('Data berhasil disimpan');
                router.push('/'); // Redirect ke halaman utama setelah data berhasil disimpan
            } else {
                // Gagal menyimpan data
                console.error('Gagal menyimpan data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold my-4">Insert Data</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="address" className="block mb-2">Address:</label>
                    <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="address2" className="block mb-2">Address 2:</label>
                    <input type="text" name="address2" id="address2" value={formData.address2} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="province" className="block mb-2">Province:</label>
                    <select name="selectedProvince" id="province" value={formData.selectedProvince} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
                        <option value="">Select Province</option>
                        {provinces.map((province) => (
                            <option key={province.ProvinceID} value={province.ProvinceID}>{province.Province}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="district" className="block mb-2">District:</label>
                    <select name="selectedDistrict" id="district" value={formData.selectedDistrict} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
                        <option value="">Select District</option>
                        {districts.filter(district => district.ProvinceID_fk === Number(formData.selectedProvince)).map((district) => (
                            <option key={district.DistrictID} value={district.DistrictID}>{district.District}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="subdistrict" className="block mb-2">Subdistrict:</label>
                    <select name="selectedSubdistrict" id="subdistrict" value={formData.selectedSubdistrict} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
                        <option value="">Select Subdistrict</option>
                        {subdistricts.filter(subdistrict => subdistrict.DistrictID_fk === Number(formData.selectedDistrict)).map((subdistrict) => (
                            <option key={subdistrict.SubdistrictID} value={subdistrict.SubdistrictID}>{subdistrict.Subdistrict}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-grey rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
            </form>
        </div>
    );
}

export async function getStaticProps() {
    // Fetch data provinsi, district, dan subdistrict dari API
    const provinceRes = await fetch('http://node-fr-02.stegripe.org:5021/province');
    const districtRes = await fetch('http://node-fr-02.stegripe.org:5021/district');
    const subdistrictRes = await fetch('http://node-fr-02.stegripe.org:5021/subdistrict');

    const provinces = await provinceRes.json();
    const districts = await districtRes.json();
    const subdistricts = await subdistrictRes.json();

    return {
        props: {
            provinces,
            districts,
            subdistricts
        }
    };
}
