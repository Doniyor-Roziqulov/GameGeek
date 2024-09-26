import Filter from "@/components/filterproducts/Filter";
import Hero from "@/components/hero/Hero";
import Product from "@/components/product/Product";
import {
    useGetBrandsQuery,
    useGetColorsQuery,
    useGetProductsQuery,
} from "@/context/api/productApi";
import React, { useEffect, useState } from "react";

const Products = () => {
    const [brandsUrl, setBrandsUrl] = useState("");
    const [colorsUrl, setColorsUrl] = useState("");
    const [cheapPrice, setCheapPrice] = useState("");
    const { data, isFetching } = useGetProductsQuery({
        brand: brandsUrl,
        color: colorsUrl,
        price: cheapPrice,
    });
    const { data: brands } = useGetBrandsQuery();
    const { data: colors } = useGetColorsQuery();

    const [selectedBrands, setSelectedBrands] = useState(
        brands?.reduce((acc, brand) => ({ ...acc, [brand]: false }), {})
    );

    const handleBrandChange = (event) => {
        const { id, checked } = event.target;
        setSelectedBrands((prev) => ({
            ...prev,
            [id]: checked,
        }));
    };

    useEffect(() => {
        if (selectedBrands) {
            let filteredSelectedBrands = [];
            for (const key in selectedBrands) {
                selectedBrands[key] && filteredSelectedBrands.push(key);
            }
            let url = "";
            filteredSelectedBrands.forEach((item) => {
                url += `&brand_name=${item}`;
            });
            setBrandsUrl(url);
        }
    }, [selectedBrands]);

    const handleColorChange = (color) => {
        color = color.split("");
        color.shift();
        setColorsUrl(`&color_options_like=%23${color.join("")}`);
    };

    const handleFilter = (e) => {
        e = e.target.value;
        if (e == "cheap") {
            setCheapPrice("&_sort=price");
        } else {
            setCheapPrice("");
        }
    };
    return (
        <section className="pb-32">
            <Hero />
            <div className="bg-[#D5F8CF]">
                <div className="container mx-auto max-w-[1310px] px-5 flex items-center justify-between pt-7 pb-6">
                    <p className="text-xl text-[#0BA42D]">Filter by:</p>
                    <select
                        onChange={(e) => handleFilter(e)}
                        className="bg-transparent text-xl text-[#0BA42D]"
                        name="filter"
                        id="">
                        <option value="">Sort by</option>
                        <option value="cheap">Cheap</option>
                    </select>
                </div>
            </div>
            <div className="container mx-auto max-w-[1310px] px-5 pt-16">
                <div className="flex justify-between">
                    <div
                        data-aos="fade-right"
                        className="w-[270px] border-t-2 border-dashed border-[#454444CC]">
                        <Filter
                            brands={brands}
                            colors={colors}
                            onBrandChange={handleBrandChange}
                            onColorChange={handleColorChange}
                        />
                    </div>
                    <Product isFetching={isFetching} item={data} />
                </div>
            </div>
        </section>
    );
};

export default Products;
