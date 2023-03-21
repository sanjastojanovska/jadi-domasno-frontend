import { Field, Form, Formik } from "formik";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  handleSetResultsLoading: Dispatch<SetStateAction<boolean>>;
  initialFilters: { filterBy: { [key: string]: string[] } };
  filterResults: (currentFilters: IFilters) => void;
}

export interface IFilters {
  достапност: string[];
  алергени: string[];
  рејтинг: string[];
  достава: string[];
}

const FiltersMenu: React.FC<Props> = ({
  handleSetResultsLoading,
  initialFilters = {
    filterBy: { достапност: [], алергени: [], рејтинг: [], достава: [] },
  },
  filterResults,
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={initialFilters}
      onSubmit={(values) => {
        handleSetResultsLoading(true);

        const activeFilters: any = {};

        for (const [key, value] of Object.entries(values.filterBy)) {
          if (value.length > 0) {
            activeFilters[key] = value;
          }
        }

        if (Object.keys(activeFilters).length > 0) {
          const urlParams = new URLSearchParams();
          Object.keys(activeFilters).map((f) => {
            return urlParams.set(f, values.filterBy[f].toString());
          });

          const newUrl = window.location.pathname + "?" + urlParams.toString();
          window.history.pushState({ path: newUrl }, "", newUrl);
        } else {
          const urlParams = new URLSearchParams();
          Object.keys(activeFilters).map((f) => {
            return urlParams.delete(f);
          });

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
              <div className="availability mb-5">
                <div className="checkbox-circle">
                  <Field
                    as="input"
                    type="checkbox"
                    id="денес"
                    name="filterBy.достапност"
                    value="денес"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="денес">Достапно веднаш</label>
                </div>

                <div className="checkbox-circle">
                  <Field
                    as="input"
                    type="checkbox"
                    id="утре"
                    name="filterBy.достапност"
                    value="утре"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="утре">Достапно утре</label>
                </div>

                <div className="checkbox-circle">
                  <Field
                    as="input"
                    type="checkbox"
                    id="нарачка"
                    name="filterBy.достапност"
                    value="нарачка"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="нарачка">Достапно по нарачка</label>
                </div>
              </div>

              <hr />

              <div className="alergeni mb-5">
                <div className="checkbox-circle">
                  <Field
                    as="input"
                    type="checkbox"
                    id="јатки"
                    name="filterBy.алергени"
                    value="јатки"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="јатки">Јатки</label>
                </div>

                <div className="checkbox-circle">
                  <Field
                    as="input"
                    type="checkbox"
                    id="риба"
                    name="filterBy.алергени"
                    value="риба"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="риба">Риба</label>
                </div>

                <div className="checkbox-circle">
                  <Field
                    as="input"
                    type="checkbox"
                    id="лактоза"
                    name="filterBy.алергени"
                    value="лактоза"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="лактоза">лактоза</label>
                </div>
              </div>

              <hr />

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

              <div className="delivery mb-5">
                <div className="checkbox-circle">
                  <Field
                    as="input"
                    type="checkbox"
                    id="испорака"
                    name="filterBy.достава"
                    value="испорака"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="испорака">Достава</label>
                </div>

                <div className="checkbox-circle">
                  <Field
                    as="input"
                    type="checkbox"
                    id="подигање"
                    name="filterBy.достава"
                    value="pickup"
                    onChange={(e: any) => {
                      handleChange(e);

                      submitForm();
                    }}
                  />
                  <label htmlFor="подигање">подигање</label>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FiltersMenu;
