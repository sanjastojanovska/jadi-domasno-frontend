import { Field, Form, Formik } from "formik";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  handleSetResultsLoading: Dispatch<SetStateAction<boolean>>;
  initialFilters: { filterBy: { [key: string]: string[] } };
  filterResults: (currentFilters: IFiltersChefs) => void;
}

export interface IFiltersChefs {
  рејтинг: string[];
  кујна: string[];
}

const FiltersChefs: React.FC<Props> = ({
  handleSetResultsLoading,
  initialFilters = { filterBy: { рејтинг: [], кујна: [] } },
  filterResults,
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={initialFilters}
      onSubmit={(values) => {
        handleSetResultsLoading(true);

        const activeFilters: any = {};

        // set active filters only the ones with values
        for (const [key, value] of Object.entries(values.filterBy)) {
          if (value.length > 0) {
            activeFilters[key] = value;
          }
        }

        // console.log(activeFilters);

        if (Object.keys(activeFilters).length > 0) {
          // if there are active filters - set them on the URL
          const urlParams = new URLSearchParams();
          Object.keys(activeFilters).map((f) => {
            return urlParams.set(f, values.filterBy[f].toString());
          });

          const newUrl = window.location.pathname + "?" + urlParams.toString();
          window.history.pushState({ path: newUrl }, "", newUrl);
        } else {
          // else remove the filters from the url (include the page)

          const urlParams = new URLSearchParams();
          Object.keys(activeFilters).map((f) => {
            return urlParams.delete(f);
          });

          // check if there are more filters in the url, if not, remove the "?"
          const newUrl =
            window.location.pathname +
            `${urlParams.values.length > 0 ? `?${urlParams.toString()}` : ""}`;
          window.history.pushState({ path: newUrl }, "", newUrl);
        }

        // filter the results in the frontend
        filterResults(activeFilters);
        handleSetResultsLoading(false);
      }}
    >
      {({ submitForm, handleChange }) => {
        return (
          <Form className="filters">
            <div className="filters-parent">
              <div className="rating mb-5">
                <p>Покажи по рејтинг</p>

                <div className="checkbox-circle">
                  <Field
                    as="input"
                    type="checkbox"
                    id="rating-3"
                    name="filterBy.рејтинг"
                    value="3"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="rating-3">
                    <i className="fas fa-star"></i> 3+
                  </label>
                </div>

                <div className="checkbox-circle">
                  <Field
                    as="input"
                    type="checkbox"
                    id="rating-4"
                    name="filterBy.рејтинг"
                    value="4"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="rating-4">
                    {" "}
                    <i className="fas fa-star"></i> 4+
                  </label>
                </div>

                <div className="checkbox-circle">
                  <Field
                    as="input"
                    type="checkbox"
                    id="rating-5"
                    name="filterBy.рејтинг"
                    value="5"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="rating-5">
                    <i className="fas fa-star"></i> 5
                  </label>
                </div>
              </div>
              <hr />

              <div className="cuisine mb-5">
                <p>Вид на кујна</p>

                <div className="cuisine-food">
                  <Field
                    as="input"
                    type="checkbox"
                    id="вегетаријанска"
                    name="filterBy.кујна"
                    value="вегетаријанска"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="вегетаријанска">Вегетаријанска</label>
                </div>

                <div className="cuisine-food">
                  <Field
                    as="input"
                    type="checkbox"
                    id="кинеска"
                    name="filterBy.кујна"
                    value="кинеска"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="кинеска">Kинеска</label>
                </div>

                <div className="cuisine-food">
                  <Field
                    as="input"
                    type="checkbox"
                    id="веганска"
                    name="filterBy.кујна"
                    value="веганска"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="веганска">Веганска</label>
                </div>

                <div className="cuisine-food">
                  <Field
                    as="input"
                    type="checkbox"
                    id="традиционална"
                    name="filterBy.кујна"
                    value="традиционална"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="традиционална">Традиционална</label>
                </div>

                <div className="cuisine-food">
                  <Field
                    as="input"
                    type="checkbox"
                    id="мексиканска"
                    name="filterBy.кујна"
                    value="мексиканска"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="мексиканска">Мексиканска</label>
                </div>

                <div className="cuisine-food">
                  <Field
                    as="input"
                    type="checkbox"
                    id="италијанска"
                    name="filterBy.кујна"
                    value="италијанска"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="италијанска">Италијанска</label>
                </div>

                <div className="cuisine-food">
                  <Field
                    as="input"
                    type="checkbox"
                    id="медитеранска"
                    name="filterBy.кујна"
                    value="медитеранска"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="медитеранска">Медитеранска</label>
                </div>

                <div className="cuisine-food">
                  <Field
                    as="input"
                    type="checkbox"
                    id="салати"
                    name="filterBy.кујна"
                    value="салати"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="салати">Салати</label>
                </div>

                <div className="cuisine-food">
                  <Field
                    as="input"
                    type="checkbox"
                    id="кето"
                    name="filterBy.кујна"
                    value="кето"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="кето">Кето</label>
                </div>

                <div className="cuisine-food">
                  <Field
                    as="input"
                    type="checkbox"
                    id="риба"
                    name="filterBy.кујна"
                    value="риба"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="риба">Риба</label>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FiltersChefs;
